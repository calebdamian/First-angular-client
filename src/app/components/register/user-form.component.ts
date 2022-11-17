import { Component, OnInit } from '@angular/core';
import { User, UserProfile } from 'src/app/interfaces/user';
import { UserService } from '../../services/user-service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
//activatedroute nos da información de la ruta actual
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  edit: boolean = false; //para distinguir si debemos crear o actualizar el usuario

  userProfile: UserProfile = {
    full_name: '',
    email: '',
  };
  user: User = {
    username: '',
    password: '',
    userProfile: this.userProfile,
  };
  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute //router permite navegar entre rutas, ejecuta metodos para ello
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.userService.getUser(params['id']).subscribe((res) => {
        console.log(res);
        this.user = res;
        //la variable user pasa a ser lo obtenido en la respuesta del backend
        this.edit = true; //se está editando el usuario
      });
    }
  }

  createUser() {
    if (this.userProfile.email != null && this.userProfile.email != null)
      this.user.userProfile = this.userProfile;
    this.userService.createUser(this.user).subscribe((v) => {
      console.log(v);
    });
  }

  updateUser(user: User, id?: number) {
    if (this.userProfile.email != null && this.userProfile.email != null)
      this.user.userProfile = this.userProfile;
    //delete this.user.createdAt;
    this.userService.updateUser(user, id).subscribe(
      (res) => {
        console.log(res);
      }
      //debido al archivo app.routing.module
      //la navegación renderiza el componente del user-form
    );
  }
}
