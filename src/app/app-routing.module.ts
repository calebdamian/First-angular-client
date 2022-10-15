import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importar el componente a renderizar
import { UserListComponent } from './components/user-list/user-list.component'
import { UserFormComponent } from './components/register/user-form.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  //agregar las rutas y componentes correspondientes

  {
    path: '', //seria el path main
    component: LoginComponent
  },
  {
    path: 'auth/login', //seria el path main
    component: LoginComponent
  },
  {
    path: 'auth/user', //read de los users, delete user
    component: UserListComponent
  },
  {
    path: 'register', //create user
    component: UserFormComponent
  },
  {
    path: 'auth/user/update/:id', //update de los users
    component: UserFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
