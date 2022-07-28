using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KuulEats.Models;

namespace KuulEats.Repository;

public class RestuarantRepository
{

  private readonly DatabaseContext _context;

    public RestuarantRepository(DatabaseContext context)
    {
        _context = context;
    }

    public bool CheckResturantExits(string name)
    {
        var result = (from restuarant in _context.Restuarants
                      where restuarant.RestuarantName == name
                      select restuarant).Count();

        return result > 0 ? true : false;
    }
    public bool InsertResturant(Restuarant restuarant)
    {
        _context.Restuarants.Add(restuarant);
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

    public Restuarant GetRestuarantbyId(int restuarantId)
    {
        var result = (from restuarant in _context.Restuarants
                      where restuarant.RestuarantId == restuarantId
                      select restuarant).FirstOrDefault();

        return result;
    }

    public List<Restuarant> GetAllRestuarant()
    {
        var result = (from restuarant in _context.Restuarants
                      select restuarant).ToList();

        return result;
    }

    public bool UpdateRestuarant(Restuarant restuarant)
    {
        _context.Entry(restuarant).Property(x => x.RestuarantName).IsModified = true;
    

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

    public bool DeleteResturants(int restuarantId)
    {
        var removeRestuarant = (from restuarant in _context.Restuarants
                          where restuarant.RestuarantId == restuarantId
                          select restuarant).FirstOrDefault();
        if (removeRestuarant != null)
        {
            _context.Restuarants.Remove(removeRestuarant);
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
        else
        {
            return false;
        }
    }
}
