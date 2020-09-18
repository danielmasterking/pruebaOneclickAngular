import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = 'http://localhost/PruebaOneclickLaravel/public/api/';
  constructor(private http: HttpClient) { }

  obtenerClientes() {
    return this.http.get(this.url + 'cliente');
  }

  obtenerDetalle(id) {
    return this.http.get(this.url + 'cliente/' + id);
  }

  buscarCliente(buscar) {
    return this.http.get(this.url + 'buscar/' + buscar);
  }
}
