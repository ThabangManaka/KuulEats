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
        return uow.OrderRepository.GetAllOrder();
    }

    [HttpPost("add")]
    public async Task<IActionResult> Post([FromBody] Order orders)
    {
        uow.OrderRepository.InsertOrder(orders);
        await uow.SaveAsync();
        return StatusCode(201);
    }



}
