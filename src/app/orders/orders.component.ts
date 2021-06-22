import { Component, OnInit } from '@angular/core';
import {CommonService } from '../common.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  alert:boolean= false;
public collection:any= [];
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getOrdersList().subscribe((result)=>{
      this.collection= result;
      console.log(this.collection)
    });
  }
  deleteOrders(orders){
    this.collection.splice(orders.id,-1)
    this.commonService.deleteOrders(orders).subscribe((result)=>{
      console.log("Data is Deleted Successfull !", result)
      this.alert= true;
    })
  }
  closeAlert(){
    this.alert= false;
  }

}
