using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Smart_Toury.Identity.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class IdentityTouristName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RegisteredAt",
                schema: "identity",
                table: "TouristProfiles",
                newName: "CreatedAt");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                schema: "identity",
                table: "TouristProfiles",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                schema: "identity",
                table: "TouristProfiles");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                schema: "identity",
                table: "TouristProfiles",
                newName: "RegisteredAt");
        }
    }
}
