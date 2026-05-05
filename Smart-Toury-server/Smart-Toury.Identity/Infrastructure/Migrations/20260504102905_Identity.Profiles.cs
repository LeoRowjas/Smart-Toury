using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Smart_Toury.Identity.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class IdentityProfiles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                schema: "identity",
                table: "Users",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateTable(
                name: "GuideProfiles",
                schema: "identity",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    ShortLine = table.Column<string>(type: "text", nullable: false),
                    Bio = table.Column<string>(type: "text", nullable: false),
                    Tags = table.Column<string[]>(type: "text[]", nullable: false),
                    ToursCount = table.Column<int>(type: "integer", nullable: false),
                    Rating = table.Column<double>(type: "double precision", nullable: false),
                    GuestsCount = table.Column<int>(type: "integer", nullable: false),
                    ReviewsCount = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GuideProfiles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GuideProfiles_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "identity",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TouristProfiles",
                schema: "identity",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    RegisteredAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CompletedTours = table.Column<int>(type: "integer", nullable: false),
                    ReviewsLeft = table.Column<int>(type: "integer", nullable: false),
                    FavoritesCount = table.Column<int>(type: "integer", nullable: false),
                    AchievementsCount = table.Column<int>(type: "integer", nullable: false),
                    Stats_CountriesVisited = table.Column<int>(type: "integer", nullable: false),
                    Stats_CitiesVisited = table.Column<int>(type: "integer", nullable: false),
                    Stats_DistanceCoveredKm = table.Column<double>(type: "double precision", nullable: false),
                    Stats_HoursInTours = table.Column<int>(type: "integer", nullable: false),
                    Stats_Rating = table.Column<double>(type: "double precision", nullable: false),
                    Stats_ActivityLevelPercentage = table.Column<int>(type: "integer", nullable: false),
                    Preferences_AccessibilityMode = table.Column<int>(type: "integer", nullable: false),
                    Preferences_RouteAtmosphere = table.Column<int>(type: "integer", nullable: false),
                    Preferences_ReceiveDiscountNotifications = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TouristProfiles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TouristProfiles_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "identity",
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GuideProfiles_UserId",
                schema: "identity",
                table: "GuideProfiles",
                column: "UserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TouristProfiles_UserId",
                schema: "identity",
                table: "TouristProfiles",
                column: "UserId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GuideProfiles",
                schema: "identity");

            migrationBuilder.DropTable(
                name: "TouristProfiles",
                schema: "identity");

            migrationBuilder.DropColumn(
                name: "CreatedAt",
                schema: "identity",
                table: "Users");
        }
    }
}
