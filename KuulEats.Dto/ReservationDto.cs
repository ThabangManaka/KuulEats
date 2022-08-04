using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KuulEats.Dto;

public class ReservationDto
{
    public string Description { get; set; }
    public int ReservationStatusId { get; set; }
    public int RestuarantId { get; set; }
    public int UserId { get; set; }
}
