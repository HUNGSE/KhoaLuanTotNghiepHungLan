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
    public class ServiceUsers : IUserService
    {
        private readonly IBaseRepository<Users> _repositoryBase;
        public ServiceUsers(IBaseRepository<Users> users)
        {
            _repositoryBase = users;
        }
        public void Add(Users entity)
        {
            _repositoryBase.Add(entity);
        }

        public void Delete(Users entity)
        {
            _repositoryBase.Delete(entity);
        }

        public IEnumerable<Users> GetAll()
        {
            return _repositoryBase.GetByWhere(x => true);
        }

        public Users GetByID(int id)
        {
            return _repositoryBase.GetByID(id);
        }

        public IEnumerable<Users> GetByWhere(Expression<Func<Users, bool>> expression)
        {
            return _repositoryBase.GetByWhere(expression);
        }
        public void Update(Users entity)
        {
            _repositoryBase.Update(entity);
        }
        public int SaveChange()
        {
            return _repositoryBase.Savechange();
        }

        
    }
}
