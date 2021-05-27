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
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _services;
        private readonly IMapper _mapper;
        public UsersController(IUserService service, IMapper mapper)
        {
            _services = service;
            _mapper = mapper;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _services.GetAll();
            var listMap = _mapper.Map<IEnumerable<UsersModel>>(list);
            return Ok(listMap);
        }
        [HttpGet("{id}")]
        public IActionResult GetByID(int id)
        {
            var item = _services.GetByID(id);
            var itemMap = _mapper.Map<UsersModel>(item);
            return Ok(itemMap);
        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, UsersModel updateModel)
        {
            var usersFromRepo = _services.GetByID(id);
            _mapper.Map(updateModel, usersFromRepo);
            _services.Update(usersFromRepo);
            _services.SaveChange();
            return Ok(updateModel);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var usersFromRepo = _services.GetByID(id);
            if (usersFromRepo == null)
                return BadRequest("Not a value user id");
            _services.Delete(usersFromRepo);
            _services.SaveChange();

            return Ok();
        }

    }
}
