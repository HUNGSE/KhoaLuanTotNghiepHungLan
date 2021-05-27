using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IServices;
using AutoMapper;
using DataModule;

namespace APINetCore.Controllers
{
    [Route("api/realEstateTypes")]
    [ApiController] 
    public class RealEstateTypesController : ControllerBase
    {
        private readonly IRealEstateTypeService _services;
        private readonly IMapper _mapper;
        public RealEstateTypesController(IRealEstateTypeService service, IMapper mapper)
        {
            _services = service;
            _mapper = mapper;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _services.GetAll();
            var listMap = _mapper.Map<IEnumerable<RealEstateTypesModel>>(list);
            return Ok(listMap);
        }
        [HttpGet("{id}")]
        public IActionResult GetByID(int id)
        {
            var item = _services.GetByID(id);
            var itemMap = _mapper.Map<RealEstateTypesModel>(item);
            return Ok(itemMap);
        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, RealEstateTypesModel updateModel)
        {
            var realEstateTypesFromRepo = _services.GetByID(id);
            _mapper.Map(updateModel, realEstateTypesFromRepo);
            _services.Update(realEstateTypesFromRepo);
            _services.SaveChange();
            return Ok(updateModel);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var realEstateTypesFromRepo = _services.GetByID(id);
            if (realEstateTypesFromRepo == null)
                return BadRequest("Not a value realEstateType id");
            _services.Delete(realEstateTypesFromRepo);
            _services.SaveChange();

            return Ok();
        }
        [HttpGet("getbyid/{id}")]
        public IActionResult GetProjectByIDProjectType(int id)
        {

            try
            {
                var projectsFromRepo = _services.GetProjectByRetypeID(id);
                if (projectsFromRepo == null)
                    return BadRequest("Not a value project ");
                var listMap = _mapper.Map<IEnumerable<ProjectsModel>>(projectsFromRepo);
                return Ok(listMap);
            }
            catch
            {
                throw;
            }


        }

    }
}
