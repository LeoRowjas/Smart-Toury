using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Smart_Toury.Tours.Domain;
using Smart_Toury.Tours.Infrastructure;
using SmartToury.SharedKernel;

namespace Smart_Toury.Tours.Features.GetAllToursFeature;


internal record GetToursFeedCommandQuery(int Page = 1, int PageSize = 20)
    : IRequest<Result<GetToursFeedResponse>>;

internal class GetToursFeedQueryHandler(ToursDbContext db)
    : IRequestHandler<GetToursFeedCommandQuery, Result<GetToursFeedResponse>>
{
    public async Task<Result<GetToursFeedResponse>> Handle
        (GetToursFeedCommandQuery request, CancellationToken cancellationToken)
    {
        if(request.Page <= 0 || request.PageSize <= 0)
            return new Result<GetToursFeedResponse>("Page and PageSize must be greater than 0.");
        
        var tours = await db.Tours
            .AsNoTracking()
            .OrderBy(t => t.Name)
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .Select(t => new TourFeedItem()
            {
                Id = t.Id,
                GuideId = t.GuideId,
                Name = t.Name,
                Description = t.Description,
                Price = t.Price,
                DistanceKm = t.DistanceKm,
                DurationMinutes = t.DurationMinutes,
            })
            .ToListAsync(cancellationToken);

        var feed = new GetToursFeedResponse() { Tours = tours };

        return Result<GetToursFeedResponse>.Success(feed);
    }
}

internal class GetToursFeedEndpoint()
{
    public static void MapEndpoint(IEndpointRouteBuilder app)
    {
        app.MapGet("/api/tours",
            async (IMediator mediator, CancellationToken ct, int page=1, int pageSize=20) =>
        {
            var command = new GetToursFeedCommandQuery(page, pageSize);
            var result = await mediator.Send(command, ct);
            return result.IsSuccess 
                ? Results.Ok(result.Value) 
                : Results.BadRequest(result.ErrorMessage);
        });
    }
}