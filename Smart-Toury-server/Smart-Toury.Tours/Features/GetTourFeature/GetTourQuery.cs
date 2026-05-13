using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Smart_Toury.Tours.Infrastructure;
using SmartToury.SharedKernel;

namespace Smart_Toury.Tours.Features.GetTourFeature;


internal record GetTourFeatureQuery(Guid TourId) : IRequest<Result<GetTourResponse>>;

internal class GetTourQueryHandler(ToursDbContext db) : IRequestHandler<GetTourFeatureQuery, Result<GetTourResponse>>
{
    public async Task<Result<GetTourResponse>> Handle(GetTourFeatureQuery request, CancellationToken cancellationToken)
    {
        var tour = await db.Tours
            .AsNoTracking()
            .FirstOrDefaultAsync(t => t.Id == request.TourId, cancellationToken: cancellationToken);
        if (tour == null)
            return Result<GetTourResponse>.Failure("Tour not found");

        var response = new GetTourResponse()
        {
            Id = tour.Id,
            GuideId = tour.GuideId,
            Name = tour.Name,
            Description = tour.Description,
            Price = tour.Price,
            DurationMinutes = tour.DurationMinutes,
            DistanceKm = tour.DistanceKm,
        };
        
        return Result<GetTourResponse>.Success(response);
    }
}

internal class GetTourEndpoint
{
    public static void MapEndpoint(IEndpointRouteBuilder app)
    {
        app.MapGet("/api/tours/{id:guid}", async (Guid id, IMediator mediator, CancellationToken ct) =>
        {
            var command = new GetTourFeatureQuery(id);
            var result = await mediator.Send(command, ct);
            
            return result.IsSuccess 
                ? Results.Ok(result.Value)
                : Results.NotFound(result.ErrorMessage);
        });
    }
}