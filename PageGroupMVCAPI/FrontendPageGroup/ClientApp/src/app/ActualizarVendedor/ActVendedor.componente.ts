import { Component } from '@angular/core';
import { VendedorServicio } from '../servicios/vendedor.servicio';
import { Router } from '@angular/router';

@Component({
  selector: 'act-vendedor-app',
  templateUrl: "./ActVendedor.componente.html"
})

export class ActVendedorComponente {

  vendedor: any = { codigo: '', nombre: '', apellido: '', identificacion: '', ciudad: '', nombre_ciudad: '' };
  public lstCiudades: any;
  opcionSeleccionado: string = '0';

  constructor(private VendedorServ: VendedorServicio, private router: Router) {
    this.ObtenerCiudades();

    this.vendedor.codigo = localStorage.getItem("codigo");
    this.vendedor.nombre = localStorage.getItem("nombre");
    this.vendedor.apellido = localStorage.getItem("apellido");
    this.vendedor.identificacion = localStorage.getItem("cedula");
    this.vendedor.ciudad = localStorage.getItem("ciudad");
    this.vendedor.nombre_ciudad = localStorage.getItem("nombre_ciudad");
  }

  ActualizarVendedor() {
    console.log('Evento Agregar');
    
    this.VendedorServ.actualizarVendedor(this.vendedor).subscribe(resultado => {
      this.router.navigate(["vendedor"]);
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

  ObtenerCiudades() {
    console.log('Evento Obtener');
    this.VendedorServ.obtenerCiudades().subscribe(resultado => {
      this.lstCiudades = resultado.data;
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.vendedor.ciudad = this.opcionSeleccionado;
  }
}
