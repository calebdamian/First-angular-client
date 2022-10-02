import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importar el componente a renderizar
import { UserListComponent } from './components/user-list/user-list.component'
const routes: Routes = [
  //agregar las rutas y componentes correspondientes
  {
    path: '', //seria el path main
    component: UserListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
