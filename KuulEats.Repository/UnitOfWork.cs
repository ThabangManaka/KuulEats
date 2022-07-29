using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KuulEats.Interfaces;

namespace KuulEats.Repository;

public  class UnitOfWork : IUnitOfWork
{

    private readonly DatabaseContext _context;
    public UnitOfWork(DatabaseContext context)
    {
        _context = context;
    }
    public IRestuarantRepository RestuarantRepository => new RestuarantRepository(_context);


    public async Task<bool> SaveAsync()
    {
        return await _context.SaveChangesAsync() > 0;
    }
}
