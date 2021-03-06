using DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Text;
using IServiceBase;
namespace IServices
{
    public interface IProjectServices : IBaseService<Projects>
    {
        IEnumerable<DetailProjects> GetDetailProjectByIDProject(int id);
    }
}
