using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Smart_Toury.Tours.Infrastructure;
using SmartToury.SharedKernel;

namespace Smart_Toury.Tours.Features.DeleteTourFeature;

internal record DeleteTourQuery(Guid Id) : IRequest<Result<bool>>;

internal class DeleteTourQueryHandler(ToursDbContext db)
    : IRequestHandler<DeleteTourQuery, Result<bool>>
{
    public async Task<Result<bool>> Handle(DeleteTourQuery request, CancellationToken ct)
    {
        var delete = await db.Tours.FirstOrDefaultAsync(t => t.Id == request.Id, ct);
        if(delete == null)
            return Result<bool>.Failure("Tour not found");
        
        delete.Archive();
        
        return Result<bool>.Success(true);
    }
}

internal static class DeleteTourEndpoint
{
    public static void MapEndpoint(IEndpointRouteBuilder app)
    {
        app.MapDelete("/api/tours/{id:guid}", async (Guid id, IMediator mediator, CancellationToken ct) =>
                {
                    var query = new DeleteTourQuery(id);
                    var response = await mediator.Send(query, ct);

                    return response.Value
                        ? Results.Ok(true)
                        : Results.NotFound(response.ErrorMessage);
                }
            ).RequireAuthorization("Guide")
            .WithSummary("Архивирует тур")
            .WithDescription(
                "У модели Tour есть свойство IsArchived и соответственно через эндпоинт он делает его true. Чтобы нельзя было просто взять и удалить из БД тур на который записаны люди он просто перемещает его в архивные как в дизайн преокте некоторые туры помечены архивный и горят серым. Надо в таких турах сделать просто недоступной кнопку записи(На бекенде тоже сделюа невозможным запись)");
    } 
}