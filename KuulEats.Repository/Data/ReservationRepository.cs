using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KuulEats.Interfaces;
using KuulEats.Models;

namespace KuulEats.Repository.Data;

 public  class ReservationRepository : IReservationRepository
{

    private readonly DatabaseContext _context;

    public ReservationRepository(DatabaseContext context)
    {
        _context = context;
    }


    public bool InsertReservation(Reservation reservation)
    {
        _context.Reservations.Add(reservation);
        var result = _context.SaveChanges();
        if (result > 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    public List<Reservation> GetAllReservation()
    {
        var result = (from reservation in _context.Reservations
                      select reservation).ToList();

        return result;
    }

    //public Reservation GetReservationtbyId(int reservationId)
    //{
    //    var result = (from reservation in _context.Reservations
    //                  where reservation.RestuarantId == reservationId
    //                  select reservation).FirstOrDefault();

    //    return result;
    //}

    public async Task<Reservation> FindScheme(int id)
    {
        return await _context.Reservations.FindAsync(id);
    }
    public bool UpdateRestuarant(Reservation reservation)
    {
        _context.Entry(reservation).Property(x => x.Description).IsModified = true;


        var result = _context.SaveChanges();
        if (result > 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    //public bool DeleteResturants(int reservationId)
    //{
    //    var removeReservation = (from reservation in _context.Reservations
    //                             where reservation.ReservationId == reservationId
    //                             select reservation).FirstOrDefault();
    //    if (removeReservation != null)
    //    {
    //        _context.Reservations.Remove(removeReservation);
    //        var result = _context.SaveChanges();

    //        if (result > 0)
    //        {
    //            return true;
    //        }
    //        else
    //        {
    //            return false;
    //        }
    //    }
    //    else
    //    {
    //        return false;
    //    }
    //}
}
