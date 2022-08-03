using AutoMapper;
using KuulEats.Interfaces;
using KuulEats.Models;
using Microsoft.AspNetCore.Mvc;

namespace KuulEats.Controllers
{


    [Route("api/[controller]")]
    public class ReservationController : Controller
    {

        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public ReservationController(IUnitOfWork uow, IMapper mapper)
        {
            this.uow = uow;
            this.mapper = mapper;
        }
        [HttpPost("add")]
        public async Task<IActionResult> Post([FromBody] Reservation reservations)
        {
            uow.ReservationRepository.InsertReservation(reservations);
            await uow.SaveAsync();
            return StatusCode(201);
        }
    }
}