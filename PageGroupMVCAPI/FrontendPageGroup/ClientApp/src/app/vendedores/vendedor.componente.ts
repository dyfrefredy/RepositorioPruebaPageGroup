import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VendedorServicio } from '../servicios/vendedor.servicio';

@Component({
  selector: 'vendedor-app',
  templateUrl: "./vendedor.componente.html"
})

export class VendedorComponente {
  public nombre = "Listado Vendedores"
  public accion: string = "Fredy";
  public lstVendedores: any;


  constructor(private VendedorS: VendedorServicio, private router: Router) {
    this.ObtenerVendedores();
  }

  ObtenerVendedores() {
    this.VendedorS.obtenerVendedores().subscribe(resultado => {
      this.lstVendedores = resultado.data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

  ActualizarVendedor(vendedorsel): void {
    localStorage.setItem("codigo", vendedorsel.codigo);
    localStorage.setItem("nombre", vendedorsel.nombre);
    localStorage.setItem("apellido", vendedorsel.apellido);
    localStorage.setItem("cedula", vendedorsel.identificacion);
    localStorage.setItem("ciudad", vendedorsel.ciudad);
    localStorage.setItem("nombre_ciudad", vendedorsel.nombre_ciudad);
    this.router.navigate(["actualizarvendedor"]);
  }

  EliminarVendedor(vendedorsel) {
    console.log('Evento Eliminar');

    this.VendedorS.eliminarVendedor(vendedorsel).subscribe(resultado => {
      this.ObtenerVendedores();
    },
      error => {
        console.log(JSON.stringify(error));
      });


  }

}
