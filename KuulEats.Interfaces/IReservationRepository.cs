using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KuulEats.Models;

namespace KuulEats.Interfaces;

public  interface IReservationRepository
{
    public bool InsertReservation(Reservation reservation);
}
