﻿using DiCho.Core.Constants;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiCho.Core.Extension
{
    public static class AuthorExtension
    {
        public static void ConfigAuthor<TIdentityUser, TIdentityRole, TDbContext>(this IServiceCollection services)
            where TIdentityUser : class
            where TIdentityRole : class
            where TDbContext : DbContext
        {
            services.AddIdentityCore<TIdentityUser>(options => options.SignIn.RequireConfirmedAccount = false)
              .AddRoles<TIdentityRole>()
               .AddEntityFrameworkStores<TDbContext>().AddDefaultTokenProviders()
               .AddSignInManager();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(AppCoreConstants.SECRECT_KEY)),
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidIssuer = AppCoreConstants.ISSUE_KEY,
                    ValidAudience = AppCoreConstants.ISSUE_KEY
                };
            });
        }
        public static void ConfigureAuthor(this IApplicationBuilder app)
        {
            app.UseAuthentication();
            app.UseAuthorization();
        }
    }
}
