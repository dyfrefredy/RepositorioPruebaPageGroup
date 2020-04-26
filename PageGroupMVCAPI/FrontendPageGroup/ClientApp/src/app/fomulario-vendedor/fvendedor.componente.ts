import { Component } from '@angular/core';
import { VendedorServicio } from '../servicios/vendedor.servicio';
import { Router } from '@angular/router';

@Component({
  selector: 'fvendedor-app',
  templateUrl: "./fvendedor.componente.html"
})

export class FVendedorComponente {

  vendedor: any = { nombre: '', apellido: '', identificacion: '', ciudad: '', nombre_ciudad: '' };
  ciudad: any = { codigo: '', descripcion: '' };
  public lstCiudades: any;
  opcionSeleccionado: string = '0';
  verSeleccion: string = '';
  CampoObligatorio: string="";

  constructor(private VendedorS: VendedorServicio, private router: Router) {
    this.ObtenerCiudades();


  }

  AgregarVendedor() {
    console.log('Evento Agregar');
    if (this.vendedor.identificacion == "") {
      this.CampoObligatorio = "Campos obligatorios, por favor digite los datos del vendedor";
    }
    else {
      this.VendedorS.agregarVendedor(this.vendedor).subscribe(resultado => {
      this.router.navigate(["vendedor"]);
      },
      error => {
        console.log(JSON.stringify(error));
      });
    }
  }

  ObtenerCiudades() {
    console.log('Evento Obtener');
    this.VendedorS.obtenerCiudades().subscribe(resultado => {
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
