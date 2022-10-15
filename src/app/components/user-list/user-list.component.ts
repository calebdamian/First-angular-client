import { Component, OnInit } from '@angular/core';
//aqui va la lógica del componente
import { UserService } from '../../services/user-service/user.service'
import { IUser } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[] = [];
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
          console.log(res);
        }

      );
  }


  //no se establece un objeto USER, si no solo obtenemos el id del usuario del cual se desee efectuar la operación
  deleteUser(id?: string) {
    this.userService.deleteUser(id).subscribe(
      (res) => {
        console.log(res);
        this.getUsers();
      }
    );
  }

  clickMethod(name: string, id?: string) {
    if (confirm("Are you sure to delete " + name)) {
      this.deleteUser(id);
    }
  }
}
