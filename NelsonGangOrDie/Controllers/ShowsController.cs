﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NelsonGangOrDie.Controllers
{
    public class ShowsController : Controller
    {
        // GET: Shows
        public ActionResult Index()
        {
            return View();
        }
    }
}