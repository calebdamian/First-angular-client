import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {



  user: User = {
    name: '',
    email: '',
    password: '',
    imageURL: ''
  };
  constructor(private userService: UserService,
    private router: Router)
  //router permite navegar entre rutas, ejecuta metodos para ello
  { }

  ngOnInit(): void {

  }

  createUser() {
    this.userService.createUser(this.user)
      .subscribe(
        (v) => {
          console.log(v);
          this.router.navigate(['/']); //navega a la pagina principal
        }

      )
  }

  updateUser() {
    this.userService.updateUser(this.user, this.user._id)
      .subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/']);
        }
      )
  }

  deleteUser() {
    this.userService.deleteUser(this.user._id).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/']);
      }
    )
  }

}
