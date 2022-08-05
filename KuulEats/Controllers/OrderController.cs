using Microsoft.AspNetCore.Mvc;

namespace KuulEats.Controllers;
public class OrderController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
