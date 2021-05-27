using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using DataAccess.Models;
using IRepositoryBase;
using IServiceBase;
using IServices;

namespace Services
{
    public class ServiceProjects : IProjectServices
    {
        private readonly IBaseRepository<Projects> _repositoryBase;
        private readonly IBaseRepository<DetailProjects> _detailProject;
        public ServiceProjects(IBaseRepository<Projects> projects, IBaseRepository<DetailProjects> detailProjects)
        {
            _repositoryBase = projects;
            _detailProject = detailProjects;
        }
        public void Add(Projects entity)
        {
            _repositoryBase.Add(entity);
        }

        public void Delete(Projects entity)
        {
            _repositoryBase.Delete(entity);
        }

        public IEnumerable<Projects> GetAll()
        {
            return _repositoryBase.GetByWhere(x => true);
        }

        public Projects GetByID(int id)
        {
            return _repositoryBase.GetByID(id);
        }

        public IEnumerable<Projects> GetByWhere(Expression<Func<Projects, bool>> expression)
        {
            return _repositoryBase.GetByWhere(expression);
        }


        public IEnumerable<DetailProjects> GetDetailProjectByIDProject(int id)
        {
            var listDetailProjects = _detailProject.GetByWhere(x => x.ProjectId == id);
            return listDetailProjects;
        }

        public void Update(Projects entity)
        {
            _repositoryBase.Update(entity);
        }   
        public IEnumerable<Projects> GetProjectByIDProjectTypes(int id)
        {
           return _repositoryBase.GetByWhere(x => x.ProjectTypeId == id);

        }
        public int SaveChange()
        {
            return _repositoryBase.Savechange();
        }

    }
}
