using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KuulEats.Interfaces;
using KuulEats.Models;

namespace KuulEats.Repository.Data;

public  class OrderRepository : IOrderRepository
{
    private readonly DatabaseContext _context;

    public OrderRepository(DatabaseContext context)
    {
        _context = context;
    }

    public bool InsertOrder(Order order)
    {
        _context.Orders.Add(order);
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

    public List<Order> GetAllOrder()
    {
        var result = (from order in _context.Orders
                      select order).ToList();

        return result;
    }


}
