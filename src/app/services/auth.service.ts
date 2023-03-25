import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';


export interface User{
  id: number,
  email: string,
  password: string,
  access: number
}


let access = {'login':''}
export default access;


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient) { }

  auth(email: string, password: string) {
    return this.http.get(`${baseUrl}/auth/${email}/${password}`);
  }


}
