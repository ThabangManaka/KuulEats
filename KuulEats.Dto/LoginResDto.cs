﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KuulEats.Dto;

public class LoginResDto
{
    public int UserId { get; set; }
    public string UserName { get; set; }
    public string Token { get; set; }
    /// public bool Status { get; set; }


}