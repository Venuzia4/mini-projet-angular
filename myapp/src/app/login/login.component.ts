import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  color:ThemePalette='primary';

  logo: any;
  isPassword:boolean=true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  envoyer() {
    console.log('envoyer')

    }

    handleClick(){
      this.router.navigate(['register']);
    }


    redirectDashboard(){
      this.router.navigate(['dashboard']);
    }
    validateLogin(username: string) {
      console.log(username)
      }

}
