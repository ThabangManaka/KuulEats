using System.Net;
using AutoMapper;
using KuulEats.Dto;
using KuulEats.Interfaces;
using KuulEats.Models;
using Microsoft.AspNetCore.Mvc;

namespace KuulEats.Controllers;
[Route("api/[controller]")]
[ApiController]
public class RestuarantController : Controller
{
    private readonly IUnitOfWork uow;
    private readonly IMapper mapper;
    public RestuarantController(IUnitOfWork uow, IMapper mapper)
    {
        this.uow = uow;
        this.mapper = mapper;
    }

    [HttpGet]
    public IEnumerable<Restuarant> Get()
    {
        return uow.RestuarantRepository.GetAllRestuarant();
    }
    [HttpGet("{id}", Name = "GetResturant")]
    public Restuarant Get(int id)
    {
        return uow.RestuarantRepository.GetRestuarantbyId(id);
    }

    // POST: api/Resturant
    [HttpPost]
    public HttpResponseMessage Post([FromBody] RestuarantDto restaurantDto)
    {
        if (ModelState.IsValid)
        {

            if (uow.RestuarantRepository.CheckResturantExits(restaurantDto.RestuarantName))
            {
                var response = new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.Conflict
                };
                return response; 
            }else
            {

                var tempRestuarant = mapper.Map<Restuarant>(restaurantDto);
              
                uow.RestuarantRepository.InsertResturant(tempRestuarant);

                var response = new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.OK
                };
                return response;

            }
        }else
        {
            var response = new HttpResponseMessage()
            {

                StatusCode = HttpStatusCode.BadRequest
            };

            return response;
        }
    }
}