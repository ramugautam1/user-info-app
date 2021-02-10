import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public loginUserFromRemote(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:8090/login', user);
  }
}
