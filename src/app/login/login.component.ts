import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username:string;
  public password:string;
  public userData=[];
  public users$: Observable<any> =this.http.get('/api/users');

  constructor(public router:Router,
    public http:HttpClient) { }

  ngOnInit() {
    this.users$.subscribe(data=>{
      console.log(data);
      this.userData=data;
    })
  }
  onSubmit(){
    console.log(this.username,this.password);
    const valid=this.userData.findIndex(ele=>ele.username==this.username && ele.password==this.password)
    console.log(valid)
    if(valid!=-1){
      this.router.navigate(['/list']);
    }
  }

}
