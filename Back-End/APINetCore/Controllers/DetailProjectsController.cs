using AutoMapper;
using DataModule;
using IServices;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APINetCore.Controllers
{
    [Route("api/detailProjects")]
    [ApiController]
    public class DetailProjectsController : ControllerBase
    {
        private readonly IDetailProjectService _services;
        private readonly IMapper _mapper;
        public DetailProjectsController(IDetailProjectService service, IMapper mapper)
        {
            _services = service;
            _mapper = mapper;
        }
        [HttpGet]
        public IActionResult getALL()
        {
            var list = _services.GetAll();
            var listMap = _mapper.Map<IEnumerable<DetailProjectsModel>>(list);
            return Ok(listMap);

        }
        [HttpGet("{id}")]
        public IActionResult GetByID(int id)
        {
            var item = _services.GetByID(id);
            var itemMap = _mapper.Map<DetailProjectsModel>(item);
            return Ok(itemMap);
        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, DetailProjectsModel updateModel)
        {
            var detailProjectFromRepo = _services.GetByID(id);
            _mapper.Map(updateModel, detailProjectFromRepo);
            _services.Update(detailProjectFromRepo);
            _services.SaveChange();
            return Ok(updateModel);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var detailProjectFromRepo = _services.GetByID(id);
            if (detailProjectFromRepo == null)
                return BadRequest("Not a value detailProject  id");

            _services.Delete(detailProjectFromRepo);
            _services.SaveChange();
            return Ok();
        }
    }
}
