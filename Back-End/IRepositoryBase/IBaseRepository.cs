using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace IRepositoryBase
{
    public interface IBaseRepository<T> where T: class
    {
        IEnumerable<T> GetAll();
        T GetByID(int id);
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        int Savechange();
        IEnumerable<T> GetByWhere(Expression<Func<T, bool>> expression);

    }
}
                                