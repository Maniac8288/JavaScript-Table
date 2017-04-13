using JavaScript_Table.Models;
using System.Web.Mvc;

namespace JavaScript_Table.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var users = UsersRepository.GetUsers();
            return View(users);
        }
        public JsonResult GetUsers()
        {
            var jsondata = UsersRepository.GetUsers();
            return Json(jsondata, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult AddUsers(Users user)
        {
            UsersRepository.InsertUser(user);
            return Json(user, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult EditUser(Users user)
        {
            UsersRepository.EditUser(user);
            return Json(user, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult DeleteUser(int Id)
        {
            UsersRepository.DeleteUser(Id);
            return Json("Удален");
        }
    }
}