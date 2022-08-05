using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KuulEats.Interfaces;

public interface IUnitOfWork
{
    IRestuarantRepository RestuarantRepository  { get; }
    IReservationRepository ReservationRepository { get; }
    IUsersRepository UsersRepository { get; }
    IOrderRepository OrderRepository { get; }
    Task<bool> SaveAsync();
}
