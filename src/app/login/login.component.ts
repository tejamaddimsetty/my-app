import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username:string;
  public password:string;
  public rememberme:boolean;
  public userData=[];
  public users$: Observable<any> =this.http.get('/api/users');

  constructor(public cookieService:CookieService, public router:Router, public http:HttpClient) { }

  ngOnInit() {
    this.username=this.cookieService.get("username");
    this.password=this.cookieService.get("password");
    this.users$.subscribe(data=>{
      console.log(data);
      this.userData=data;
    })
  }
  public onSaveUsernameChanged(value:boolean){
    this.rememberme = value;
}
  onSubmit(){
    if(this.rememberme==true){
      this.cookieService.set('username', this.username);  
      this.cookieService.set('password', this.password);  
      console.log(this.cookieService.get('username'));  
      console.log(this.cookieService.get('password'));  
    } else{
      this.cookieService.deleteAll();
    }
    console.log(this.username,this.password);
    const valid=this.userData.findIndex(ele=>ele.username==this.username && ele.password==this.password)
    console.log(valid)
    if(valid!=-1){
      this.router.navigate(['/list']);
    }
  }

}
