using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using KuulEats.Dto;
using KuulEats.Models;
using Microsoft.EntityFrameworkCore;

namespace KuulEats.Repository;

public  class UsersRepository
{
    private readonly DatabaseContext _context;
    public UsersRepository(DatabaseContext context)
    {
          _context = context;  
    }

    public bool CheckUsersExits(string username)
    {
        var result = (from user in _context.Users
                      where user.UserName == username
                      select user).Count();

        return result > 0 ? true : false;
    }

    public async Task<Users> Authenticate(string userName, string passwordText)
    {

        var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == userName);

        if (user == null || user.PasswordKey == null)
            return null;

        if (!MatchPasswordHash(passwordText, user.Password, user.PasswordKey))
            return null;

        return user;

    }
    private bool MatchPasswordHash(string passwordText, byte[] password, byte[] passwordKey)
    {
        using (var hmac = new HMACSHA512(passwordKey))
        {
            var passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(passwordText));

            for (int i = 0; i < passwordHash.Length; i++)
            {
                if (passwordHash[i] != password[i])
                    return false;
            }

            return true;
        }
    }

    //public bool AuthenticateUsers(string username, string password)
    //{
    //    var result = (from user in _context.Users
    //                  where user.UserName == username && user.Password == password
    //                  select user).Count();



    //    return result > 0 ? true : false;


    //}
    public void Register(UsersDto userDto)
    {
        byte[] passwordHash, passwordKey;
        using (var hmac = new HMACSHA512())
        {
            passwordKey = hmac.Key;
            passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(userDto.Password));
        }

        Users user = new Users();
     
        user.UserName = userDto.UserName;
        user.Email = userDto.Email;
        user.Contactno = userDto.Contactno;
        user.Password = passwordHash;
        user.PasswordKey = passwordKey;
        user.CreatedDate = DateTime.Now;
       


       _context.Users.Add(user);

    }

    public Users GetUsersbyId(int userId)
    {
        var result = (from user in _context.Users
                      where user.UserId == userId
                      select user).FirstOrDefault();

        return result;
    }
    public bool InsertUsers(Users user)
    {
        _context.Users.Add(user);
        var result = _context.SaveChanges();
        if (result > 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    public bool UpdateUsers(Users user)
    {
        _context.Entry(user).Property(x => x.Email).IsModified = true;
        _context.Entry(user).Property(x => x.Contactno).IsModified = true;
        _context.Entry(user).Property(x => x.Status).IsModified = true;
        _context.Entry(user).Property(x => x.Password).IsModified = true;

        var result = _context.SaveChanges();
        if (result > 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
