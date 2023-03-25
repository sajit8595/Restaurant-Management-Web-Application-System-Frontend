import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { Observable } from 'rxjs';



export interface Dish{
  name: string;
  rate: number;
  id: number;
}


@Injectable({
  providedIn: 'root'
})


export class MenuService {

  constructor(private http: HttpClient) { }


  public getAllMenu(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${baseUrl}/getAllMenu`);
  }


  saveDish(data: any) {
    return this.http.post(`${baseUrl}/addMenu`, data);
  }

  public removeDish(id: number) {
      return this.http.delete(`${baseUrl}/deleteMenuById/${id}`);
  }

  public deleteAllDish(){
    return this.http.delete(`${baseUrl}/deleteAllMenu`);
  }

  // public removeDishByName(name: string){
  //   return this.http.delete(`${baseUrl}/deleteDishByName`);
  // }

}
