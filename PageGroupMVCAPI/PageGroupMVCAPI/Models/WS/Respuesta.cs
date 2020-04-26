using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PageGroupMVCAPI.Models.WS
{
    public class Respuesta
    {
        public int resultado { get; set; }
        public object data { get; set; }
        public string mensaje { get; set; }
    }
}