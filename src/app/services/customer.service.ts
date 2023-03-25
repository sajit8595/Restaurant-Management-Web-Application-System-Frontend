import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http: HttpClient) { }

  public getCustomerById(id: number){
    return this.http.get(`${baseUrl}/getCustomerById/${id}`);
  }


  public getAllCustomers(){
    return this.http.get(`${baseUrl}/getAllCustomers`);
  }


  public addOrder(data: any){
    return this.http.post(`${baseUrl}/addOrder`, data);
  }

  public getAllOrders(){
    return this.http.get(`${baseUrl}/getAllOrders`);
  }

  public statusChange(orderId: number, status: string){
    return this.http.post(`${baseUrl}/statusChange/${orderId}/${status}`, null);
  }

}
