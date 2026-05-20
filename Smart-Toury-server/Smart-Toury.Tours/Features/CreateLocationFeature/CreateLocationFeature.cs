using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Smart_Toury.Tours.Domain;
using Smart_Toury.Tours.Infrastructure;
using SmartToury.SharedKernel;

namespace Smart_Toury.Tours.Features.CreateLocationFeature;

internal record CreateLocationCommand(CreateLocationRequest Request) : IRequest<Result<CreateLocationResponse>>;

internal class CreateLocationFeature(ToursDbContext db) 
    : IRequestHandler<CreateLocationCommand, Result<CreateLocationResponse>>
{
    public async Task<Result<CreateLocationResponse>> Handle(CreateLocationCommand request, CancellationToken cancellationToken)
    {
        var req = request.Request;
        if (req.Latitude is < -90 or > 90)
        {
            return Result<CreateLocationResponse>.Failure("Latitude need to be between -90 and 90.");
        }
        if (req.Longitude is < -180 or > 180)
        {
            return Result<CreateLocationResponse>.Failure("Longitude need to be between -180 and 180.");
        }
        
        var location = Location.Create(
            req.Name,
            req.Description,
            req.Latitude,
            req.Longitude
        );
        await db.Locations.AddAsync(location, cancellationToken);
        await db.SaveChangesAsync(cancellationToken);

        var response = new CreateLocationResponse()
        {
            Id = location.Id,
            Name = location.Name,
            Description = location.Description,
            Latitude = location.Latitude,
            Longitude = location.Longitude
        };

        return Result<CreateLocationResponse>.Success(response);
    }
}

internal static class CreateLocationEndpoint
{
    public static void MapEndpoint(IEndpointRouteBuilder app)
    {
        app.MapPost("/api/locations",
            async (CreateLocationRequest req, IMediator mediator, CancellationToken ct) =>
            {
                var command = new CreateLocationCommand(req);
                var response = await mediator.Send(command, ct);
                
                return response.IsSuccess
                    ? Results.Ok(response.Value)
                    : Results.BadRequest(response.ErrorMessage);
            }
        ).RequireAuthorization("Guide");
    }
}