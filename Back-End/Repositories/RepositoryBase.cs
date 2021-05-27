using DataAccess.Models;
using IRepositoryBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace Repositories
{
    public class RepositoryBase<T> : IBaseRepository<T> where T : class
    {
        private readonly RealEstateManagermentContext _context;
        public RepositoryBase(RealEstateManagermentContext context)
        {
            _context = context;
        }
        public void Add(T entity)
        {
            _context.Set<T>().Add(entity);
            _context.SaveChanges();
        }

        public void Delete(T entity)
        {
            _context.Set<T>().Remove(entity);
            _context.SaveChanges();
          
        }

        public IEnumerable<T> GetAll()
        {
            return _context.Set<T>().Where(x => true);
        }

        public T GetByID(int id)
        {
            return _context.Set<T>().Find(id);
        }

        public IEnumerable<T> GetByWhere(Expression<Func<T, bool>> expression)
        {
            return _context.Set<T>().Where(expression);
        }

        public void Update(T entity)
        {
            _context.Set<T>().Update(entity);
            _context.SaveChanges();
        }
    }
}
