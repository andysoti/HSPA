using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore.SqlServer;
using WebAPI.Data;


var builder = WebApplication.CreateBuilder(args);

// I added this, Iconfiguration instance
var configuration = builder.Configuration;



// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

// builder.Services.AddSwaggerGen(); // REMOVE

// New stuf:
builder.Services.AddCors();
builder.Services.AddDbContext<DataContext>(options => 
            options.UseSqlServer(configuration.GetConnectionString("Default")));



var app = builder.Build();

// // Configure the HTTP request pipeline. REMOVE
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }

// New Stuff:
 app.UseCors(m => m.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
 //


app.UseAuthorization();

app.MapControllers();

app.Run();


