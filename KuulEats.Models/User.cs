using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KuulEats.Models;


[Table("Users")]
public class Users
{
    [Key]
    public int UserId { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }
    public string Contactno { get; set; }
    public string Password { get; set; }

    public DateTime? CreatedDate { get; set; }
    public bool Status { get; set; }
}

