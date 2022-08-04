using System.Net;
using AutoMapper;
using KuulEats.Dto;
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

        [HttpGet]
        public IEnumerable<Reservation> Get()
        {
           return uow.ReservationRepository.GetAllReservation();
        }
        [HttpPost("add")]
        public async Task<IActionResult> Post([FromBody] Reservation reservations)
        {
            uow.ReservationRepository.InsertReservation(reservations);
            await uow.SaveAsync();
            return StatusCode(201);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id , [FromBody] ReservationDto reservationDto)
        {

           

                var tempReservation = mapper.Map<Reservation>(reservationDto);
                uow.ReservationRepository.UpdateRestuarant(tempReservation);
                
                return StatusCode(200);

            
         

        }

        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateReservation(int id, [FromBody] ReservationDto reservationDto)
        {
            var reservationFromDb = await uow.ReservationRepository.FindScheme(id);
            mapper.Map(reservationDto, reservationFromDb);
            await uow.SaveAsync();
            return StatusCode(200);
        }
    }
}