using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PageGroupMVCAPI.Models.WS
{
    public class Vendedor
    {
        public int codigo { get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
        public string identificacion { get; set; }
        public int? ciudad { get; set; }
        public string nombre_ciudad { get; set; }
    }
}