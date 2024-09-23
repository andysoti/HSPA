var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

// builder.Services.AddSwaggerGen(); // REMOVE

// New stuf:
builder.Services.AddCors();



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


