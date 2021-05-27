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
    [Route("api/projects")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly IProjectServices _services;
        private readonly IMapper _mapper;
        public ProjectsController(IProjectServices service, IMapper mapper)
        {
            _services = service;
            _mapper = mapper;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _services.GetAll();
            var listMap = _mapper.Map<IEnumerable<ProjectsModel>>(list);
            return Ok(listMap);
        }
        [HttpGet("{id}")]
        public IActionResult GetByID(int id)
        {
            var item = _services.GetByID(id);
            var itemMap = _mapper.Map<ProjectsModel>(item);
            return Ok(itemMap);
        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, ProjectsModel updateModel)
        {
            var projectsFromRepo = _services.GetByID(id);
            _mapper.Map(updateModel, projectsFromRepo);
            _services.Update(projectsFromRepo);
            _services.SaveChange();
            return Ok(updateModel);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var projectsFromRepo = _services.GetByID(id);
            if (projectsFromRepo == null)
                return BadRequest("Not a value project id");
            _services.Delete(projectsFromRepo);
            _services.SaveChange();

            return Ok();
        }
        [HttpGet("getbyid/{id}")]
        public IActionResult GetDetailProjectByProjectID(int id)
        {

            try
            {
                var projectDetailsFromRepo = _services.GetDetailProjectByIDProject(id);
                if (projectDetailsFromRepo == null)
                    return BadRequest("Not a value projectDetail ");
                var listMap = _mapper.Map<IEnumerable<DetailProjectsModel>>(projectDetailsFromRepo);
                return Ok(listMap);
            }
            catch
            {
                throw;
            }


        }
    }
}
