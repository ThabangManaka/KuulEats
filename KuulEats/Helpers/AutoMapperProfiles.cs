using AutoMapper;
using KuulEats.Dto;
using KuulEats.Models;

namespace KuulEats.Helpers;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {

        CreateMap<Users, UsersDto>().ReverseMap();
        //CreateMap<Users, UsersDto>()
        // .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.UserName))
        //     .ForMember(dest => dest.Contactno, opt => opt.MapFrom(src => src.Contactno))
        //     .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
        //     .ForMember(dest => dest.Password, opt => opt.MapFrom(src => src.Password))
        //     .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.Status));

        CreateMap<Restuarant, RestuarantDto>().ReverseMap();
        CreateMap<Restuarant, RestuarantDto>()
       .ForMember(dest => dest.RestuarantName, opt => opt.MapFrom(src => src.RestuarantName));
        CreateMap<Reservation, ReservationDto>().ReverseMap();
        CreateMap<Reservation, ReservationDto>()
         .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description))
         .ForMember(dest => dest.RestuarantId, opt => opt.MapFrom(src => src.RestuarantId))
         .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.UserId))
         .ForMember(dest => dest.ReservationStatusId, opt => opt.MapFrom(src => src.ReservationStatusId));
    }
}
