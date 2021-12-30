﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiCho.DataService.ViewModels
{
    public class TokenModel
    {
        public string Id { get; set; }
        public string Token { get; set; }
        public List<string> Role { get; set; }
        public string Username { get; set; }
        public string TokenType { get; set; }
        public DateTime Expires { get; set; }
        public string ShortName { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Email { get; set; }
    }
    public class RefreshTokenViewModel
    {
        public string Token { get; set; }
        public DateTime Expires { get; set; }
        public List<string> Role { get; set; }
        public bool IsExpired => DateTime.UtcNow >= Expires;
        public DateTime Created { get; set; }
        public DateTime? Revoked { get; set; }
        public bool IsActive => Revoked == null && !IsExpired;
    }
    public class TokenDetailViewModel
    {
        public string Token { get; set; }
        public List<string> Role { get; set; }
        public string Username { get; set; }
        public string TokenType { get; set; }
        public DateTime Expires { get; set; }
        public JwtSecurityToken Infor { get; set; }
    }
}
