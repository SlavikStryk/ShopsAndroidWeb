﻿using Microsoft.AspNetCore.Identity;

namespace ShopsAndroidWeb.Data.Entities.Identity
{
    public class AppUserRole : IdentityUserRole<long>
    {
        public virtual AppUser? User { get; set; }
        public virtual AppRole? Role { get; set; }
    }
}