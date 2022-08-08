using System.Net;
using AutoMapper;
using KuulEats.Interfaces;
using KuulEats.Models;
using Microsoft.AspNetCore.Mvc;

namespace KuulEats.Controllers;
[Route("api/[controller]")]
public class OrderController : Controller
{

    private readonly IUnitOfWork uow;
    private readonly IMapper mapper;

    public OrderController(IUnitOfWork uow, IMapper mapper)
        {
            this.uow = uow;
            this.mapper = mapper;
        }


    [HttpGet]
    public IEnumerable<Order> Get()
    {
        try
        {
            return uow.OrderRepository.GetAllOrder();
        }
        catch (Exception)
        {
            throw;
        }
    }
    [HttpGet("post/{id}")]

    public IEnumerable<Order>  GetOrder(int id)
    {
        try
        {

            return uow.OrderRepository.GetAllOrderdById(id);
        }
        catch (Exception)
        {
            throw;
        }
    }
    [HttpPost("post")]
    public  HttpResponseMessage AddOrder([FromBody] Order orders)
    {

        try    
        {
            if (ModelState.IsValid)
            {
                uow.OrderRepository.InsertOrder(orders);
                uow.SaveAsync();

                var response = new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.OK
                };

                return response;
            }
            else
            {
                var response = new HttpResponseMessage()
                {

                    StatusCode = HttpStatusCode.BadRequest
                };

                return response;
            }
            
        }catch (Exception)
        {
            throw;
        }
      
    }



}
