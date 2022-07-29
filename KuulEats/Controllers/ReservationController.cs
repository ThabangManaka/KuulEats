using AutoMapper;
using KuulEats.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace KuulEats.Controllers;
public class ReservationController : Controller
{

    private readonly IUnitOfWork uow;
    private readonly IMapper mapper;

    public ReservationController(IUnitOfWork uow, IMapper mapper)
    {
        this.uow = uow;
        this.mapper = mapper;
    }
    public IActionResult Index()
    {
        return View();
    }
}
