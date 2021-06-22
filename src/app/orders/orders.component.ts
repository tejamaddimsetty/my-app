import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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
    // this.commonService.getOrdersList().subscribe((result)=>{
    //   this.collection= result;
    //   console.log(this.collection)
    // });
    this.getOrder();
  }
  getOrder(){
    this.commonService.getOrdersList().subscribe((result)=>{
      this.collection= result;
      console.log(this.collection)
    });
  }
  deleteOrders(orders){
    Swal.fire({  
      title: 'Are you sure want to remove?',  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, delete it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      if (result.value) {  
       // Swal.fire(  
          this.delete(orders);
        //)  
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Cancelled',  
          'Your Order file is safe :)',  
          'error'  
        )  
      }  
    })  


    
  }
  delete(orders:any){
    this.collection.splice(orders.id,-1)
    this.commonService.deleteOrders(orders).subscribe((result)=>{
      console.log("Data is Deleted Successfull !", result)
      this.alert= true;
      this.getOrder();
    })
  }
  closeAlert(){
    this.alert= false;
  }

}
