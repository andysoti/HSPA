import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { } // TODO error at 18.7:50, line user..users


addUser(user: User  ) {
  let users = [];
  if (localStorage.getItem('Users')) {
    users = JSON.parse(localStorage.getItem('Users')!);

    // added this because users was an object, not iterable
    if (!Array.isArray(users)) {
      console.error('Invalid data in local storage, resetting users array.');
      users = [];
    }

    users = [user, ...users];
  } else {
    users = [user];
  }
  localStorage.setItem('Users', JSON.stringify(users));
}

}
