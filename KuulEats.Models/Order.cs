using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KuulEats.Models;


public class Order
{
    [Key]
    public int OrderId { get; set; }
    [Required(ErrorMessage = "Enter Description")]
    [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
    public string Description { get; set; }
    public int ReservationId { get; set; }

}