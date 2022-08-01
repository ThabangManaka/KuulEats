using AutoMapper;
using KuulEats.Dto;
using KuulEats.Models;

namespace KuulEats.Helpers;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {

        CreateMap<Users, UsersDto>().ReverseMap();
        CreateMap<Users, UsersDto>()
         .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.UserName))
             .ForMember(dest => dest.Contactno, opt => opt.MapFrom(src => src.Contactno))
             .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
             // .ForMember(dest => dest.Password, opt => opt.MapFrom(src => src.Password))
             .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.Status));

        CreateMap<Restuarant, RestuarantDto>().ReverseMap();
        CreateMap<Restuarant, RestuarantDto>()
       .ForMember(dest => dest.RestuarantName, opt => opt.MapFrom(src => src.RestuarantName));
    }
}
