using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Dtos;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
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
            var cityFromDb = await uow.CityRepository.FindCity(id);
            cityFromDb.LastUpdatedBy = 1;
            cityFromDb.LastUpdatedOn = DateTime.Now;
            mapper.Map(cityDto, cityFromDb);
            await uow.SaveAsync();
            return StatusCode(200);
        }

        // [HttpPut("updateCountry/{id}")]
        // public async Task<IActionResult> UpdateCity(int id, CityUpdateDto cityDto)
        // {
        //     var cityFromDb = await uow.CityRepository.FindCity(id);
        //     cityFromDb.LastUpdatedBy = 1;
        //     cityFromDb.LastUpdatedOn = DateTime.Now;
        //     mapper.Map(cityDto, cityFromDb);
        //     await uow.SaveAsync();
        //     return StatusCode(200);
        // }
        // [HttpPatch("update/{id}")]
        // public async Task<IActionResult> UpdateCityPatch(int id, JsonPatchDocument<City> cityToPatch)
        // {
        //     var cityFromDb = await uow.CityRepository.FindCity(id);
        //     cityFromDb.LastUpdatedBy = 1;
        //     cityFromDb.LastUpdatedOn = DateTime.Now;
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