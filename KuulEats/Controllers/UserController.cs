using System.Net;
using AutoMapper;
using KuulEats.Dto;
using KuulEats.Interfaces;
using KuulEats.Models;
using Microsoft.AspNetCore.Mvc;

namespace KuulEats.Controllers;

[Route("api/[controller]")]
public class UserController : Controller
{
    private readonly IUnitOfWork uow;
    private readonly IMapper mapper;

    public UserController(IUnitOfWork uow, IMapper mapper)
    {
        this.uow = uow;
        this.mapper = mapper;
    }

    [HttpPost]
    public HttpResponseMessage Post([FromBody] UsersDto usersDto)
    {
        if (ModelState.IsValid)
        {
            if (uow.UsersRepository.CheckUsersExits(usersDto.UserName))
            {
                var response = new HttpResponseMessage()
                { 
                  StatusCode = HttpStatusCode.Conflict
                };
                return response;

            }else
            {
             
                uow.UsersRepository.Register(usersDto);

                var response = new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.OK
                };

                return response;

            }

        }
        else
        {
            var response = new HttpResponseMessage()
            {

                StatusCode = HttpStatusCode.BadRequest
            };

            return response;
        }
    }
    
    }

