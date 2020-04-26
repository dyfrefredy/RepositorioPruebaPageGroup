using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using PageGroupMVCAPI.Models.WS;
using PageGroupMVCAPI.Models;

namespace PageGroupMVCAPI.Controllers
{
    public class CrudMaestroController : ApiController
    {
        [HttpGet]
        public Respuesta Obtener()
        {
            Respuesta oR = new Respuesta();
            oR.resultado = 1;

            try
            {
                using (DBPageGroupEntities db = new DBPageGroupEntities())
                {
                    List<Vendedor> lst = Listar(db);

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

        [HttpPost]
        public Respuesta agregar([FromBody]Vendedor modelo)
        {
            Respuesta oR = new Respuesta();
            oR.resultado = 1;

            try
            {
                using (DBPageGroupEntities db = new DBPageGroupEntities())
                {
                    VENDEDOR oVendedor = new VENDEDOR();
                    oVendedor.ve_nombre = modelo.nombre;
                    oVendedor.ve_apellido = modelo.apellido;
                    oVendedor.ve_numero_identificacion = modelo.identificacion;
                    oVendedor.ve_codigo_ciudad = modelo.ciudad;
                    oVendedor.ve_estado = "V";

                    db.VENDEDOR.Add(oVendedor);
                    db.SaveChanges();

                    List<Vendedor> listado = Listar(db);

                    oR.resultado = 0;
                    oR.data = listado;
                }
            }

            catch (Exception ex)
            {
                oR.mensaje = ex.ToString();
            }

            return oR;
        }

        [HttpPost]
        public Respuesta actualizar([FromBody]Vendedor modelo)
        {
            Respuesta oR = new Respuesta();
            oR.resultado = 1;

            try
            {
                using (DBPageGroupEntities db = new DBPageGroupEntities())
                {
                    VENDEDOR oVendedor = db.VENDEDOR.Find(modelo.codigo);
                    oVendedor.ve_nombre = modelo.nombre;
                    oVendedor.ve_apellido = modelo.apellido;
                    oVendedor.ve_numero_identificacion = modelo.identificacion;
                    oVendedor.ve_codigo_ciudad = modelo.ciudad;
                    db.Entry(oVendedor).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();

                    List<Vendedor> lista = Listar(db);
                
                    oR.resultado = 0;
                    oR.data = lista;
                }
            }

            catch (Exception ex)
            {
                oR.mensaje = ex.ToString();
            }

            return oR;
        }

        [HttpPost]
        public Respuesta eliminar(Vendedor model)
        {
            Respuesta oR = new Respuesta();
            oR.resultado = 1;

            try
            {
                using (DBPageGroupEntities db = new DBPageGroupEntities())
                {
                    VENDEDOR oVendedor = db.VENDEDOR.Find(model.codigo);
                    oVendedor.ve_estado = "E";
                    db.Entry(oVendedor).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }
            }

            catch (Exception ex)
            {
                oR.mensaje = ex.ToString();
            }

            return oR;
        }

        private List<Vendedor> Listar(DBPageGroupEntities db)
        {
            List<Vendedor> lista = (from d in db.VENDEDOR
                                    join e in db.CIUDAD on d.ve_codigo_ciudad equals e.ci_codigo
                                    where d.ve_estado == "V"
                                    select new Vendedor
                                    {
                                        codigo = d.ve_codigo,
                                        nombre = d.ve_nombre,
                                        apellido = d.ve_apellido,
                                        identificacion = d.ve_numero_identificacion,
                                        ciudad = d.ve_codigo_ciudad,
                                        nombre_ciudad=e.ci_descripcion
                                    }).ToList();

            return lista;
        }
    }
}
