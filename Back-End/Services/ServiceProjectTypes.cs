using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using DataAccess.Models;
using IRepositoryBase;
using IServiceBase;
using IServices;
using System.Linq;

namespace Services
{
    public class ServiceProjectTypes : IProjectTypeService
    {
        private readonly IBaseRepository<ProjectTypes> _repositoryBase;
        private readonly IBaseRepository<Projects> _project;
        public ServiceProjectTypes(IBaseRepository<ProjectTypes> projectTypes, IBaseRepository<Projects> projects)
        {
            _repositoryBase = projectTypes;
            _project = projects;
        }
        public void Add(ProjectTypes entity)
        {
            _repositoryBase.Add(entity);
        }

        public void Delete(ProjectTypes entity)
        {
            _repositoryBase.Delete(entity);
        }

        public IEnumerable<ProjectTypes> GetAll()
        {
            return _repositoryBase.GetByWhere(x => true);
        }

        public ProjectTypes GetByID(int id)
        {
            return _repositoryBase.GetByID(id);
        }

        public IEnumerable<ProjectTypes> GetByWhere(Expression<Func<ProjectTypes, bool>> expression)
        {
            return _repositoryBase.GetByWhere(expression);
        }
        
        public void Update(ProjectTypes entity)
        {
            _repositoryBase.Update(entity);
        }

        IEnumerable<Projects> IProjectTypeService.GetProjectByIDProjectType(int id)
        {
            var listProjectByProjectTypeID = _project.GetByWhere(x=>x.ProjectTypeId == id);
            return listProjectByProjectTypeID;
        }


        public int SaveChange()
        {
            return _repositoryBase.Savechange();
        }

    }
}
