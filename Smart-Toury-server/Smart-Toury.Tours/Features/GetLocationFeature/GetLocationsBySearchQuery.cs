using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Smart_Toury.Tours.Infrastructure;
using SmartToury.SharedKernel;

namespace Smart_Toury.Tours.Features.GetLocationFeature;

internal record GetLocationsBySearchQuery(string? Name) : IRequest<Result<LocationSearchResponse>>;

internal class GetLocationsBySearchQueryHandler(ToursDbContext db) 
    : IRequestHandler<GetLocationsBySearchQuery, Result<LocationSearchResponse>>
{
    public async Task<Result<LocationSearchResponse>> Handle(GetLocationsBySearchQuery request, CancellationToken cancellationToken)
    {
        var query = db.Locations.AsQueryable();

        if (!string.IsNullOrEmpty(request.Name))
        {
            query = query.Where(x => x.Name.Contains(request.Name));
        }
        
        var locations = await query
            .Take(10)
            .Select(x => new LocationDto()
            {
                Id = x.Id,
                Name = x.Name,
                Latitude = x.Latitude,
                Longitude = x.Longitude,
            })
            .ToListAsync(cancellationToken);
        
        var result = new LocationSearchResponse(locations);
        return Result<LocationSearchResponse>.Success(result);
    }
}

internal static class GetLocationsBySearchEndpoint
{
    public static void MapEndpoint(IEndpointRouteBuilder app)
    {
        app.MapGet("/api/locations", async (string? name, IMediator mediator, CancellationToken ct) =>
            {
                var query = new GetLocationsBySearchQuery(name);
                var response = await mediator.Send(query, ct);
                return response.IsSuccess 
                    ? Results.Ok(response.Value)
                    : Results.BadRequest(response.ErrorMessage);
            }
        ).RequireAuthorization();
    }
}