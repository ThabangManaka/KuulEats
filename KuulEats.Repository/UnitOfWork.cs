using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KuulEats.Interfaces;
using KuulEats.Repository.Data;

namespace KuulEats.Repository;

public  class UnitOfWork : IUnitOfWork
{

    private readonly DatabaseContext _context;
    public UnitOfWork(DatabaseContext context)
    {
        _context = context;
    }
    public IRestuarantRepository RestuarantRepository => new RestuarantRepository(_context);

    public IReservationRepository ReservationRepository => new ReservationRepository(_context);
    public IUsersRepository UsersRepository => new UsersRepository(_context);

    public async Task<bool> SaveAsync()
    {
        return await _context.SaveChangesAsync() > 0;
    }
}
