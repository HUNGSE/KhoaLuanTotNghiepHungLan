using AutoMapper;
using DataModule;
using IServices;
using Microsoft.AspNetCore.Mvc;
using Services;
using System.Collections.Generic;

namespace APINetCore.Controllers
{
    [Route("api/projectTypes")]
    [ApiController]
    public class ProjectTypesController : ControllerBase
    {
        private readonly IProjectTypeService _services;
        private readonly IMapper _mapper;
        public ProjectTypesController(IProjectTypeService service, IMapper mapper)
        {
            _services = service;
            _mapper = mapper;
        }
        //get All
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _services.GetAll();
            var listMap = _mapper.Map<IEnumerable<ProjectTypesModel>>(list);
            return Ok(listMap);
        }
        
        [HttpGet("{id}")]
        public IActionResult GetByID(int id)
        {
            var item = _services.GetByID(id);
            var itemMap = _mapper.Map<ProjectTypesModel>(item);
            return Ok(itemMap);
        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, ProjectTypesModel updateModel)
        {
            var projectTypesFromRepo = _services.GetByID(id);
            _mapper.Map(updateModel, projectTypesFromRepo);
            _services.Update(projectTypesFromRepo);
            _services.SaveChange();
            return Ok(updateModel);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var projectTypesFromRepo = _services.GetByID(id);
            if (projectTypesFromRepo == null)
                return BadRequest("Not a value projectType id");
            _services.Delete(projectTypesFromRepo);
            _services.SaveChange();

            return Ok();
        }
        //get list Project by Id  ProjectTypes
        [HttpGet("getbyid/{id}")]
        public IActionResult GetProjectByIDProjectType(int id)
        {
           
            try
            {
                var projectTypesFromRepo = _services.GetProjectByIDProjectType(id);
                if (projectTypesFromRepo == null)
                    return BadRequest("Not a value project ");
                var listMap = _mapper.Map<IEnumerable<ProjectsModel>>(projectTypesFromRepo);
                return Ok(listMap);
            }
            catch
            {
                 throw;
            }
   
           
        }
    }
}
