using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Smart_Toury.Tours.Infrastructure;
using SmartToury.SharedKernel;

namespace Smart_Toury.Tours.Features.GetMyToursFeature;

internal record GetMyToursQuery : IRequest<Result<GetMyToursResponse>>;

internal class GetMyToursQueryHandler(ToursDbContext db, ICurrentUser user) 
    : IRequestHandler<GetMyToursQuery, Result<GetMyToursResponse>>
{
    public async Task<Result<GetMyToursResponse>> Handle(GetMyToursQuery request, CancellationToken ct)
    {
        var query = await db.Tours.Where(x => x.GuideId == user.UserId).ToListAsync(ct);
        var myTourDtos = query.Select(x => new MyTourDto()
        {
            TourId = x.Id,
            Name = x.Name,
            Description = x.Description,
            Price = x.Price,
        }).ToList();
        var myTours = new GetMyToursResponse() { Tours = myTourDtos };
        
        return Result<GetMyToursResponse>.Success(myTours);
    }
}

internal static class GetMyToursEndpoint
{
    public static void MapEndpoint(IEndpointRouteBuilder app)
    {
        app.MapGet("/api/tours/me", async (IMediator mediator, CancellationToken ct) => 
            {
                var query = new GetMyToursQuery();
                var result = await mediator.Send(query, ct);
                
                return result.IsSuccess
                    ? Results.Ok(result.Value)
                    : Results.BadRequest();
            }
        ).RequireAuthorization("Guide");
    }
}