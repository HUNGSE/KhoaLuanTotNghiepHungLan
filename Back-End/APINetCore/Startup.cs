using APINetCore.AutomapperProfile;
using AutoMapper;
using DataAccess.Models;
using IRepositoryBase;
using IServiceBase;
using IServices;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Repository;
using Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace APINetCore
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddDbContext<RealEstateManagermentContext>(
               options =>
                       options.UseSqlServer(
                       Configuration.GetConnectionString("RealEstateConnectionString"),
                       b => b.MigrationsAssembly(typeof(RealEstateManagermentContext).Assembly.FullName)));
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new ProfileAutoMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);
            services.AddTransient(typeof(IBaseRepository<>), typeof(BaseRepository<>));
            services.AddTransient<IAddressService, ServiceAddress>();
            services.AddTransient<IDetailProjectService, ServiceDetailProjects>();
            services.AddTransient<IProjectServices, ServiceProjects>();
            services.AddTransient<IProjectTypeService, ServiceProjectTypes>();
            services.AddTransient<IRealEstateTypeService, ServiceRealEstateTypes>();
            services.AddTransient<IUserService, ServiceUsers>();
            
            services.AddControllers();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors(x => x
                 .AllowAnyMethod()
                 .AllowAnyHeader()
                 .SetIsOriginAllowed(origin => true) // allow any origin
                 .AllowCredentials()); // allow credentials

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
