import { Component, OnInit } from '@angular/core';
//aqui va la lógica del componente
import { UserService } from '../../services/user.service'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  //se instancia el servicio
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  getUsers() {
    this.userService.getUsers()
      .subscribe(
        (v) => console.info(v)
      ); //permite visualizar la respuesta
  }
}
