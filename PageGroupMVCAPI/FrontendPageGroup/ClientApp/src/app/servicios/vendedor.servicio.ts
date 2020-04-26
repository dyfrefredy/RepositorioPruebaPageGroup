import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class VendedorServicio {

  constructor(private http: HttpClient) { }

  obtenerVendedores(): Observable<any> {
    return this.http.get("http://localhost:57894/api/CrudMaestro/Obtener/");
  }

  agregarVendedor(vendedor: any) {
    let json = JSON.stringify(vendedor);
    let header = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post("http://localhost:57894/api/CrudMaestro/agregar", json, { headers: header });
  }

  actualizarVendedor(vendedor: any) {
    let json = JSON.stringify(vendedor);
    let header = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post("http://localhost:57894/api/CrudMaestro/actualizar", json, { headers: header });
  }

  eliminarVendedor(vendedor: any) {
    let json = JSON.stringify(vendedor);
    let header = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post("http://localhost:57894/api/CrudMaestro/eliminar", json, { headers: header });
  }

  obtenerCiudades(): Observable<any> {
    return this.http.get("http://localhost:57894/api/ciudad/ObtenerCiudad");
  }


}
