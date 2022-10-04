import { Injectable } from '@angular/core';
//aqui surge la consulta a la API para mostrar los datos
import { HttpClient } from '@angular/common/http'
import { User } from '../interfaces/user';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // se utilizan las rutas de la API
  // creación de objeto http que permitirá ejecutar operaciones de este tipo

  BASE_URL: string = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) {
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/user`);
  }
  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/user/${id}`);
  }
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/user/create`, user);
  }
  deleteUser(id?: string) {
    return this.http.delete<User>(`${this.BASE_URL}/user/delete/${id}`);
  }
  updateUser(user: User, id?: string) {
    return this.http.put<User>(`${this.BASE_URL}/user/update/${id}`, user);
  }

}
