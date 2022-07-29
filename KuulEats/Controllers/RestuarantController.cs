using KuulEats.Interfaces;
using KuulEats.Models;
using Microsoft.AspNetCore.Mvc;

namespace KuulEats.Controllers;
public class RestuarantController : Controller
{
    private readonly IUnitOfWork uow;

    public RestuarantController(IUnitOfWork uow)
    {
        this.uow = uow;
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
}
