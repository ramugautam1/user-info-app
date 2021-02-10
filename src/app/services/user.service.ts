import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:8090/users";
  constructor(private http: HttpClient) { }
  saveUser = (user) => {
    return this.http.post(this.baseUrl, user);
  }
  updateUser = (user) => {
    return this.http.put(this.baseUrl, user);
  }
  deleteUser = (id) => {
    return this.http.delete(this.baseUrl + '/' + id);
  }
  getUserById = (id) => {
    return this.http.get(this.baseUrl + '/' + id);
  }

  getUserByUsername = (username) => {
    return this.http.get(this.baseUrl + '/' + username);
  }
  getAllUser = () => {
    return this.http.get(this.baseUrl);
  }
}
