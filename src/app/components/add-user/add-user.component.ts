import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = new FormGroup(
      {
        username: new FormControl(''),
        password: new FormControl(''),
        email: new FormControl(''),
        dob: new FormControl(''),
        mobileNo: new FormControl(''),
        hobbies: new FormControl(''),
        nationality: new FormControl(''),
        gender: new FormControl(''),
        comments: new FormControl('')
      }
    );
  }

  saveUser = (user) => {
    console.log(JSON.stringify(user));
    this.userService.saveUser(user).subscribe(res => {
      alert('user info is saved successfully');
      this.router.navigate(['/list-user']);
    });
  }

}
