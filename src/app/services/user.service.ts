import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(`${baseUrl}/getAllUsers`);
  }

  saveUser(data: any) {
    return this.http.post(`${baseUrl}/addUser`, data);
  }

  removeUser(id: number) {
      return this.http.delete(`${baseUrl}/deleteUserById/${id}`);
  }

}
