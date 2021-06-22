import { Component, OnInit } from '@angular/core';
import {CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.css']
})
export class AddOrdersComponent implements OnInit {

  alert:boolean = false;
    addOrder= new FormGroup({
    customername: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    product: new FormControl(''),
    due: new FormControl(''),
    total: new FormControl('')
  })
  constructor(private orders:CommonService) { }

  ngOnInit(): void {
  }
  craeteOrders(){
    // console.log(this.addRestaurent.value);
    this.orders.addOrders(this.addOrder.value).subscribe((result)=>{
      this.alert = true;
      this.addOrder.reset({});
      console.log("Get Data From Service", result)
    })
  }
  closeAlert(){
    this.alert = false;
  }

}