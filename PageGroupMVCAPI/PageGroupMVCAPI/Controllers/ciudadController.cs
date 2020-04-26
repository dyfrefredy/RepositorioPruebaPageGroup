using PageGroupMVCAPI.Models;
using PageGroupMVCAPI.Models.WS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PageGroupMVCAPI.Controllers
{
    public class ciudadController : ApiController
    {
        [HttpGet]
        public Respuesta ObtenerCiudad()
        {
            Respuesta oR = new Respuesta();
            oR.resultado = 1;

            try
            {
                using (DBPageGroupEntities db = new DBPageGroupEntities())
                {
                    List<Ciudades> lst = (from d in db.CIUDAD
                                        select new Ciudades
                                        {
                                            codigo = d.ci_codigo,
                                            descripcion = d.ci_descripcion
                                        }).ToList();

                    oR.data = lst;
                    oR.resultado = 0;
                }
            }

            catch (Exception ex)
            {
                oR.mensaje = ex.ToString();
            }

            return oR;
        }
    }
}
