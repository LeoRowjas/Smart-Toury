using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Smart_Toury.Tours.Domain;
using Smart_Toury.Tours.Infrastructure;
using SmartToury.SharedKernel;

namespace Smart_Toury.Tours.Features.CreateTourFeature;


internal record CreateTourCommand(CreateTourRequest Request) : IRequest<Result<CreateTourResponse>>;

internal class CreateTourHandler(ToursDbContext db, ICurrentUser user) : IRequestHandler<CreateTourCommand, Result<CreateTourResponse>>
{
    public async Task<Result<CreateTourResponse>> Handle(CreateTourCommand request, CancellationToken cancellationToken)
    {
        var req = request.Request;
        
        if (req.Price is < 0 or > 20000)
            return Result<CreateTourResponse>.Failure("Price must be between 0 and 20000");
            
        if (req.TourStops == null || req.TourStops.Length == 0)
            return Result<CreateTourResponse>.Failure("A tour must have at least one stop");
        
        var locationIdsFromRequest = req.TourStops.Select(ts => ts.LocationId).Distinct().ToList();
        
        var existingLocationsCount = await db.Locations
            .Where(loc => locationIdsFromRequest.Contains(loc.Id))
            .CountAsync(cancellationToken);
        
        if (existingLocationsCount != locationIdsFromRequest.Count)
        {
            return Result<CreateTourResponse>.Failure("One or more locations do not exist in the database");
        }
        
        var tour = Tour.Create(
            guideId: user.UserId, 
            name: req.Name,
            description: req.Description,
            price: req.Price,
            durationMinutes: req.DurationMinutes,
            distanceKm: req.DistanceKm
        );

        db.Tours.Add(tour);
        
        foreach (var stopDto in req.TourStops)
        {
            var stop = TourStop.Create(
                tourId: tour.Id, 
                locationId: stopDto.LocationId, 
                order: stopDto.Order,
                offsetMinutes: stopDto.OffsetMinutes,
                durationMinutes: stopDto.DurationMinutes,
                guideNotes: stopDto.GuideNotes
            );
            
            db.TourStops.Add(stop);
        }
        
        await db.SaveChangesAsync(cancellationToken);

        var response = new CreateTourResponse()
        {
            Id = tour.Id,
        };
        
        return Result<CreateTourResponse>.Success(response);
    }
}

internal static class CreateTourEndpoint
{
    internal static void MapEndpoint(IEndpointRouteBuilder app)
    {
        app.MapPost("/api/tours", async (CreateTourRequest req, IMediator mediator, CancellationToken ct) =>
            {
                var command = new CreateTourCommand(req);
                var response= await mediator.Send(command, ct);
                return response.IsSuccess
                    ? Results.Ok(response.Value)
                    : Results.BadRequest(response.ErrorMessage);
            }
        ).RequireAuthorization("Guide");
    }
}