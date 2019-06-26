using Microsoft.EntityFrameworkCore.Migrations;

namespace CrazyShop.Web.Migrations
{
    public partial class JIC : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Token",
                table: "Employees",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Token",
                table: "Clients",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Token",
                table: "Employees");

            migrationBuilder.DropColumn(
                name: "Token",
                table: "Clients");
        }
    }
}
