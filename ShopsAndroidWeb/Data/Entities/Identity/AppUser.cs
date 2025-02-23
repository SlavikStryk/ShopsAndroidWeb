﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopsAndroidWeb.Data.Entities.Identity
{
    public class AppUser : IdentityUser<long>
    {
        public string? Image { get; set; } 
        public virtual ICollection<AppUserRole>? UserRoles { get; set; }
    }
}
