using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KuulEats.Models;

public class Reservation
{

    [Key]
    public int ReservationId { get; set; }

    [Required(ErrorMessage = "Enter Description")]
    [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
    public string Description { get; set; }
    public int ReservationStatusId { get; set; }
    public int RestuarantId { get; set; }
    public int UserId { get; set; }
}
