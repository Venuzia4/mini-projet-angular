import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user!:User;

  constructor(private htttpClient:HttpClient) { }



public signIn(login:{username:string,password:string}): Observable<User> {

  return this.htttpClient.post<User>('https://dummyjson.com/auth/login',login)
  ;
}


}
