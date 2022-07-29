﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KuulEats.Models;

[Table("Restuarant")]
public class Restuarant
{
    [Key]
    public int RestuarantId { get; set; }

    [Required(ErrorMessage = "Enter Role name")]
    [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
    public string RestuarantName { get; set; }
}