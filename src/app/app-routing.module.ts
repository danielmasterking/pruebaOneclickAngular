import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
    {
      path:'',
      component:ClienteComponent
    },
    {
        path:'detalle/:id/:cliente',
        component:DetalleComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }