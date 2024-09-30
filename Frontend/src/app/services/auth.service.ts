import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserForRegister, UserForLogin } from '../model/user';
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:5138/api'; //environment.baseUrl;
  constructor(private http: HttpClient) { }


authUser(user: any){
  return this.http.post(this.baseUrl + '/account/login', user);

  // let UserArray = [];
  // if(localStorage.getItem('Users')){
  //   UserArray = JSON.parse(localStorage.getItem('Users')!);
  // }
  // // filter for desired user
  // return UserArray.find((p: any) => p.userName === user.userName && p.password === user.password);
}

}
