import { Component, OnInit , Pipe} from '@angular/core';
import { ClienteService } from '../servicios/cliente.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  title :string = 'Clientes';
  clientes :any = [];
  filtro :string ='';
  constructor(
    private clienteServicio: ClienteService,
    private router: Router, 
  ) { }

  ngOnInit(): void {
    this.recuperarClientes();
  }

  recuperarClientes() {
    this.clienteServicio.obtenerClientes().
    subscribe(result => 
      this.clientes = result
      
    );
  }

  detalle(id,cliente) {
    this.router.navigate(['detalle/' + id + '/' + cliente]);
  }

  buscarRegistro(){
    console.log('valor'+this.filtro)

    if(this.filtro == '') {
      this.recuperarClientes();

    }else{
      this.clienteServicio.buscarCliente(this.filtro).
      subscribe(result => 
        this.clientes = result
        
      );
    }
  }

}
