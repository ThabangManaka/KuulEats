using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KuulEats.Dto;

public class UsersDto
{
    public int UserId { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }
    public string Contactno { get; set; }
   
    [Required]
    public string Password { get; set; }

    public string PasswordKey { get; set; }

    public DateTime? CreatedDate { get; set; }
    public bool Status { get; set; }
}
