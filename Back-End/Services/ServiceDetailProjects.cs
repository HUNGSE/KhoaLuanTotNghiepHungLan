using System;
using System.Collections.Generic;
using System.Text;
using DataAccess.Models;
using IRepositoryBase;
using IServiceBase;
using IServices;
using System.Linq.Expressions;

namespace Services
{
    public class ServiceDetailProjects : IDetailProjectService
    {
        private readonly IBaseRepository<DetailProjects> _repositoryBase;
        public ServiceDetailProjects(IBaseRepository<DetailProjects> detailprojects)
        {
            _repositoryBase = detailprojects;
        }

        public void Add(DetailProjects entity)
        {
            _repositoryBase.Add(entity);
        }

        public void Delete(DetailProjects entity)
        {
            _repositoryBase.Delete(entity);
        }

        public IEnumerable<DetailProjects> GetAll()
        {
            return _repositoryBase.GetByWhere(x => true);
        }

        public DetailProjects GetByID(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<DetailProjects> GetByWhere(Expression<Func<DetailProjects, bool>> expression)
        {
            return _repositoryBase.GetByWhere(expression);
        }

       

        public void Update(DetailProjects entity)
        {
            _repositoryBase.Update(entity);
        }
        public int SaveChange()
        {
            return _repositoryBase.Savechange();
        }
    }
}

