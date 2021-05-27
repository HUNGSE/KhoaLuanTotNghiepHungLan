using AutoMapper;
using DataAccess.Models;
using IRepositoryBase;
using IServiceBase;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
//using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<RealEstateManagermentContext>(
                options =>
                        options.UseSqlServer(
                        Configuration.GetConnectionString("RealEstateConnectionString"),
                        b => b.MigrationsAssembly(typeof(RealEstateManagermentContext).Assembly.FullName)));

            //var mappingConfig = new MapperConfiguration(mc =>
            //{
            //    mc.AddProfile(new AutoMapperProfile());
            //});

            //IMapper mapper = mappingConfig.CreateMapper();
            //services.AddSingleton(mapper);
            //services.AddTransient(typeof(IBaseRepository<>), typeof(BaseRepository<>));
            //services.AddTransient(typeof(IBaseService<>), typeof(BaseRepository<>));
            //services.AddTransient<IAddressRepository, AddressRepository>();
            //services.AddTransient<IBonusRuleRepository, BonusRuleRepository>();
            //services.AddTransient<ICityRepository, CityRepository>();
            //services.AddTransient<ICityRepository, CityRepository>();
            //services.AddTransient<IClientRepository, ClientRepository>();
            //services.AddTransient<ICommunesRepository, CommunesRepository>();
            //services.AddTransient<IDetailProjectRepository, DetailProjectRepository>();
            //services.AddTransient<IDistrictRepository, DistrictRepository>();
            //services.AddTransient<IProjectRepository, ProjectRepository>();
            //services.AddTransient<IProjectTypeRepository, ProjectTypeRepository>();
            //services.AddTransient<IRealEstateTypeRepository, RETypeRepository>();
            //services.AddTransient<IUserRepository, UserRepository>();
            services.AddControllers();
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            
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

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
