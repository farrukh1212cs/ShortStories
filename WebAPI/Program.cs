using BOL;
using DAL;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;

var builder = WebApplication.CreateBuilder(args);
//Step 1: Add Ref Of BOL and DAL

//Step 2: Add Services
builder.Services.AddCors();
builder.Services.AddControllers();
builder.Services.AddDbContext<SSDbContext>();

builder.Services.AddIdentity<SSUser,IdentityRole>()
                .AddEntityFrameworkStores<SSDbContext>()
                .AddDefaultTokenProviders();

builder.Services.ConfigureApplicationCookie(opt =>
{
    opt.Events = new CookieAuthenticationEvents()
    {
        OnRedirectToLogin = redirectContext =>
        {
            redirectContext.HttpContext.Response.StatusCode = 403;
            return Task.CompletedTask;
        },
        OnRedirectToAccessDenied = redirectContext =>
        {
            redirectContext.HttpContext.Response.StatusCode = 401;
            return Task.CompletedTask;
        }
    };

});

var app = builder.Build();

//Step 3: Add mapControllers
app.UseCors(x => x.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader().AllowCredentials());

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();
//Step 4: Add Pacakage
//Microsoft.VisualStudio.Web.CodeGeneration.Design