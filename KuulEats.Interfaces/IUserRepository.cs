using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KuulEats.Dto;
using KuulEats.Models;

namespace KuulEats.Interfaces;

public interface IUsersRepository
{
     Task<Users> Authenticate(string userName, string passwordText);
    public LoginResDto GetUserDetailsbyCredentials(string username);
    public bool CheckUsersExits(string username);
    public void Register(UsersDto userDto);
    public Users GetUsersbyId(int userId);
    public bool InsertUsers(Users user);
    public bool UpdateUsers(Users user);
}
