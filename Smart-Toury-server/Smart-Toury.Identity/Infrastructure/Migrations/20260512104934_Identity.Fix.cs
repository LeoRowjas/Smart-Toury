using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Smart_Toury.Identity.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class IdentityFix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                schema: "identity",
                table: "TouristProfiles",
                newName: "ProfileId");

            migrationBuilder.RenameColumn(
                name: "Id",
                schema: "identity",
                table: "GuideProfiles",
                newName: "ProfileId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ProfileId",
                schema: "identity",
                table: "TouristProfiles",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ProfileId",
                schema: "identity",
                table: "GuideProfiles",
                newName: "Id");
        }
    }
}
