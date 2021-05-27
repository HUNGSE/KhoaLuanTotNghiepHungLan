using AutoMapper;
using DataAccess.Models;
using DataModule;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APINetCore.AutomapperProfile
{
    public class ProfileAutoMapper:Profile
    {
        public ProfileAutoMapper()
        {

            CreateMap<DetailProjects, DetailProjectsModel>().ReverseMap();
            CreateMap<Projects, ProjectsModel>().ReverseMap();
            CreateMap<ProjectTypes, ProjectTypesModel>().ReverseMap();
            CreateMap<RealEstateTypes, RealEstateTypesModel>().ReverseMap();
            CreateMap<Users, UsersModel>().ReverseMap();
        }
    }
}
