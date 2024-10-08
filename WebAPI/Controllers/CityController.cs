using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Dtos;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    // Attributes decorate the class

    [Authorize]
    [AllowAnonymous]
    public class CityController : BaseController
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public CityController(IUnitOfWork uow, IMapper mapper)
        {
            this.mapper = mapper;
            this.uow = uow;
        }


        // GET api/city
        [HttpGet]
        public async Task<IActionResult> GetCities()
        {
            //  throw new UnauthorizedAccessException();
            var cities = await uow.CityRepository.GetCitiesAsync();   

            var citiesDto = mapper.Map<IEnumerable<CityDto>>(cities);

            return Ok(citiesDto);
             }
 



        [HttpPost("post")]
         public async Task<IActionResult> AddCity(CityDto cityDto){
                // map cityDTO to city
            //     var city = new City {
            //     Name = cityDto.Name,
            //     LastUpdatedBy = 1,
            //     LastUpdatedOn = DateTime.Now
            // };
            var city = mapper.Map<City>(cityDto);
            city.LastUpdatedBy = 1;
            city.LastUpdatedOn = DateTime.Now;

            uow.CityRepository.AddCity(city);
            await uow.SaveAsync();
            return StatusCode(201);
        }  

        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateCity(int id, CityDto cityDto)
        {
             if(id != cityDto.Id)
                return BadRequest("Update not allowed");
            var cityFromDb = await uow.CityRepository.FindCity(id);

            if (cityFromDb == null)
                return BadRequest("Update not allowed");

            cityFromDb.LastUpdatedBy = 1;
            cityFromDb.LastUpdatedOn = DateTime.Now;
            mapper.Map(cityDto, cityFromDb);
 
            // throw new Exception("Some unknown error occured"); 
            await uow.SaveAsync();
            return StatusCode(200);
        }

        // Uses a cityupdate dto that only changes the name (dto only has name field)
        [HttpPut("updateCityName/{id}")]
        public async Task<IActionResult> UpdateCity(int id, CityUpdateDto cityDto)
        {
            var cityFromDb = await uow.CityRepository.FindCity(id);
            cityFromDb.LastUpdatedBy = 1;
            cityFromDb.LastUpdatedOn = DateTime.Now;
            mapper.Map(cityDto, cityFromDb);
            await uow.SaveAsync();
            return StatusCode(200);
        }
        

        // Patch will not be used in this application - being less supported in Dotnet core
        // also less performance with newtonsoft
        // // compromises securtiy (user can cahnge patch operation)
        // [HttpPatch("update/{id}")]
        // public async Task<IActionResult> UpdateCityPatch(int id, JsonPatchDocument<City> cityToPatch)
        // {
        //     var cityFromDb = await uow.CityRepository.FindCity(id);
        //     cityFromDb.LastUpdatedBy = 1;
        //     cityFromDb.LastUpdatedOn = DateTime.Now;
             
        //      // JSON patch support multiple operations, here replace is being used (this is specified in the packet)
        //     cityToPatch.ApplyTo(cityFromDb, ModelState);
        //     await uow.SaveAsync();
        //     return StatusCode(200);
        // }


        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {
             uow.CityRepository.DeleteCity(id);
            await uow.SaveAsync();
            return Ok(id);
        }  


    }
}