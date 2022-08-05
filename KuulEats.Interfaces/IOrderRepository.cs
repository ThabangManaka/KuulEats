using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KuulEats.Interfaces;
using KuulEats.Models;

namespace KuulEats.Interfaces;

public  interface IOrderRepository
{
    public bool InsertOrder(Order order);
    List<Order> GetAllOrder();
}
