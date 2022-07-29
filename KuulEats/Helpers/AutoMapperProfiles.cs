using AutoMapper;
using KuulEats.Dto;
using KuulEats.Models;

namespace KuulEats.Helpers;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {
        CreateMap<Restuarant, RestuarantDto>().ReverseMap();
        CreateMap<Restuarant, RestuarantDto>()
       .ForMember(dest => dest.RestuarantName, opt => opt.MapFrom(src => src.RestuarantName));
    }
}
