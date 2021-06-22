import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-orders',
  templateUrl: './edit-orders.component.html',
  styleUrls: ['./edit-orders.component.css']
})
export class EditOrdersComponent implements OnInit {

  alert:boolean = false;
    editOrder= new FormGroup({
    customername: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    product: new FormControl(''),
    due: new FormControl(''),
    total: new FormControl('')
  })
  constructor(public routerlink:Router, private orders:CommonService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.orders.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      this.editOrder= new FormGroup({
        customername: new FormControl(result['customername']),
        address: new FormControl(result['address']),
        phone: new FormControl(result['phone']),
        product: new FormControl(result['product']),
        due: new FormControl(result['due']),
        total: new FormControl(result['total'])
      })
    })
  }
  updateOrders(){
    this.orders.updateOrders(this.router.snapshot.params.id,this.editOrder.value).subscribe((result)=>{
      console.log(result,"data updated successfull")
      this.alert=true;
      this.routerlink.navigate(['/list']);
    })
  }
  closeAlert(){
    this.alert=false;
  }

}