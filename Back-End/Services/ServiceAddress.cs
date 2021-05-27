using System;
using System.Collections.Generic;
using System.Text;
using IServiceBase;
using DataAccess.Models;
using IRepositoryBase;
using IServices;
using System.Linq.Expressions;

namespace Services
{
    public class ServiceAddress : IAddressService
    {
        private readonly IBaseRepository<Address> _repositoryBase;
        public ServiceAddress(IBaseRepository<Address> repository)
        {
            _repositoryBase = repository;
        }
        public void Add(Address entity)
        {
            _repositoryBase.Add(entity);
        }

        public void Delete(Address entity)
        {
            _repositoryBase.Delete(entity);
        }

        public IEnumerable<Address> GetAll()
        {
           return  _repositoryBase.GetByWhere(x => true);
        }

        public Address GetByID(int id)
        {
            return _repositoryBase.GetByID(id);
        }

        public IEnumerable<Address> GetByWhere(Expression<Func<Address, bool>> expression)
        {
            return _repositoryBase.GetByWhere(expression);
        }



        public void Update(Address entity)
        {
            _repositoryBase.Update(entity);

        }
        public int SaveChange()
        {
             return _repositoryBase.Savechange();
      
        }
    }
}
