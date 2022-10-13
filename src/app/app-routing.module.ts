import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importar el componente a renderizar
import { UserListComponent } from './components/user-list/user-list.component'
import { UserFormComponent } from './components/user-form/user-form.component';
const routes: Routes = [
  //agregar las rutas y componentes correspondientes
  //TODO: Cambiar rutas por defecto, agregar el login como main y luego enrutar debidamente una vez autenticado el usuario.
  {
    path: '', //seria el path main
    component: UserListComponent
  },
  {
    path: 'user', //nuestro main real
    component: UserListComponent
  },
  {
    path: 'user/create', //formulario de creación
    component: UserFormComponent
  },
  {
    path: 'user/update/:id',
    component: UserFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
