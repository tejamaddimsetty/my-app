import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL= "http://localhost:3000/orders"
    constructor(private _http:HttpClient) { }
    getOrdersList(){
     return this._http.get(this.URL);
    }
    addOrders(data){
      return this._http.post(this.URL, data);
    }
    deleteOrders(id){
      return this._http.delete(`${this.URL}/${id}`)
    }
    getCurrentData(id){
      return this._http.get(`${this.URL}/${id}`)
    }
    updateOrders(id,data){
      return this._http.put(`${this.URL}/${id}`,data)
    }
    
  }