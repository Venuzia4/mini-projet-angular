import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayItems!:string;

  @Output() logoutEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public logOut(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('refreshToken');
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
