using DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Text;
using IServiceBase;
namespace IServices
{
    public interface IRealEstateTypeService : IBaseService<RealEstateTypes>
    {
        IEnumerable<Projects> GetProjectByRetypeID(int id);
    }
}
