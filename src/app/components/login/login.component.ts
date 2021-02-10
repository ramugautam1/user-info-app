import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../user';
import {Route, Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser = () => {
    this.loginService.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log('response received');
        this.router.navigate(['/home']);
      },
      error => {
        console.log('exception occured');
        this.msg = 'Bad Credentials. Check email and password!';
      }
    );
  }

}
