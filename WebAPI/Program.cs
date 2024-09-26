using System.Net;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore.SqlServer;
using Microsoft.AspNetCore.Http;
using WebAPI.Data;
using WebAPI.Data.Repo;
using WebAPI.Helpers;
using WebAPI.Interfaces;
using WebAPI.Extensions;
using WebAPI.Middlewares;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// I added this, Iconfiguration instance
var configuration = builder.Configuration;



// Add services to the container.


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

// builder.Services.AddSwaggerGen(); // REMOVE

// New stuf:

builder.Services.AddCors();
builder.Services.AddDbContext<DataContext>(options => 
            options.UseSqlServer(configuration.GetConnectionString("Default")));

builder.Services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
 
builder.Services.AddControllers().AddNewtonsoftJson();
builder.Services.AddControllers();


 var secretKey = configuration.GetSection("AppSettings:Key").Value;
var key = new SymmetricSecurityKey(Encoding.UTF8
    .GetBytes(secretKey));
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(opt => {
        opt.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            ValidateIssuer = false,
            ValidateAudience = false,
            IssuerSigningKey = key
        };
    });

var app = builder.Build();


// New Stuff:

var env = app.Environment;
app.ConfigureExceptionHandler(env);                                  


 app.UseCors(m => m.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
 //

app.UseAuthentication(); // video 44
app.UseAuthorization();

app.MapControllers();

app.Run();


