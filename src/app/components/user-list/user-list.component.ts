import { Component, OnInit } from '@angular/core';
//aqui va la lógica del componente
import { UserService } from '../../services/user.service'
import { User } from 'src/app/interfaces/user';
import { map } from 'rxjs-compat/operator/map';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  //se instancia el servicio
  constructor(private userService: UserService) { }



  ngOnInit(): void {
    this.getUsers();

  }
  getUsers() {
    this.userService.getUsers()
      .subscribe(
        res => {
          this.users = res;
          console.log(this.users);
        }

      )
    /* .subscribe(
      res => {
        this.users = res;
        console.log(this.users);
      }
    )*/ //permite visualizar la respuesta

  }
}
