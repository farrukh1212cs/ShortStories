using DAL;

var builder = WebApplication.CreateBuilder(args);
//Step 1: Add Ref Of BOL and DAL

//Step 2: Add Services
builder.Services.AddControllers();
builder.Services.AddDbContext<SSDbContext>();

var app = builder.Build();

//Step 3: Add mapControllers
app.MapControllers();

app.Run();
//Step 4: Add Pacakage
//Microsoft.VisualStudio.Web.CodeGeneration.Design