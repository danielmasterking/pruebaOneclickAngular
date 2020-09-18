import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../servicios/cliente.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  title :string= 'Detalle presupuesto';
  detalleFicha :any = [];
  cliente:string = this.rutaActiva.snapshot.params.cliente;
  constructor(
    private clienteServicio: ClienteService,
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //console.log('id :'+ this.rutaActiva.snapshot.params.id)
    this.obtenerDetalle()
    
  }

  obtenerDetalle() {
    this.clienteServicio.obtenerDetalle(this.rutaActiva.snapshot.params.id).
    subscribe(result => {
       console.log(result)
        this.detalleFicha = result
      }
    );

    console.log(this.detalleFicha)
  }

}
