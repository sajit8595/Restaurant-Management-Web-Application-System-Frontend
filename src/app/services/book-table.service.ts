import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';


export interface Table{
  id: number,
  booked: boolean,
  orderId: number,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class BookTableService {

  constructor(private http: HttpClient) { }

  public getAllTables(): Observable<Table[]>{
    return this.http.get<Table[]>(`${baseUrl}/getAllTables`);
  }

  public getTableById(id: number) {
      return this.http.get(`${baseUrl}/getAllTableById/${id}`);
  }

  addTable(data: any){
    return this.http.post(`${baseUrl}/addTable`, data);
  }

  removeTable(id: number) {
    return this.http.delete(`${baseUrl}/deleteTableById/${id}`);
  }

  removeAllTables(){
    return this.http.delete(`${baseUrl}/deleteAllTables`);
  }

  bookTable(id: number, name:string){
    return this.http.put(`${baseUrl}/bookTable/${id}/${name}`, null);
  }


  generatePayment(id: number, review: string){
    return this.http.put(`${baseUrl}/payTable/${id}/${review}`, null);
  }

  getAllCustomers(){
    return this.http.get(`${baseUrl}/getAllCustomers`);
  }


}
