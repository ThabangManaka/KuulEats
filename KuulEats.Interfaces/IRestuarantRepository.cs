using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KuulEats.Models;

namespace KuulEats.Interfaces
{
    public  interface IRestuarantRepository
    {
        public bool CheckResturantExits(string name);
        public bool InsertResturant(Restuarant restuarant);
        public Restuarant GetRestuarantbyId(int restuarantId);
        public List<Restuarant> GetAllRestuarant();
        public bool UpdateRestuarant(Restuarant restuarant);
        public bool DeleteResturants(int restuarantId);
    }
}
