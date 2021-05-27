using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace IServiceBase
{
    public interface IBaseService<T> where T: class
    {
        IEnumerable<T> GetAll();
        T GetByID(int id);
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        IEnumerable<T> GetByWhere(Expression<Func<T, bool>> expression);
        int SaveChange();
    }
}
