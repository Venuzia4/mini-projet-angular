import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  color: ThemePalette = 'primary';
  user!: User;
  error: string = '';
  username!: string;
  password!: string;

  logo: any;
  isPassword: boolean = true;
  constructor(private router: Router, private loginservice: LoginService) {

  }

  ngOnInit(): void {
  }


  handleClick() {
    this.router.navigate(['register']);
  }

  redirectDashboard() {
    this.loginservice.signIn({ username: this.username, password: this.password }).subscribe(response => {
      this.user = response;
      this.router.navigate(['dashboard']);
      localStorage.setItem('user', JSON.stringify(this.user));
      window.location.reload;
    },
      (err) => {
        this.error = err.error.message;
      })


  }





}
