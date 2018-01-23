import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../../module/User';
import { Http } from '@angular/http';
import{RequestOptions,Headers,ResponseContentType,Response}from '@angular/http';
import{AuthenticationService}from'../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private headers=new Headers({'Content-Type':'application/json'});
  private options =new RequestOptions({headers:this.headers});
  userM:User=new User();
  loading = false;
  returnUrl: string;
  pageSalle:any;
  test:User=new User();
  location = {};

  constructor( private route: ActivatedRoute,private router :Router,private user:UserService,private http:Http,
      private authenticationService: AuthenticationService  ) { }

  ngOnInit() {
    
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        console.log(position.coords); 
      });
   }
   
  }

  saveUser(userM:User){

    var myObj = { "email":this.userM.email,"password":this.userM.password};
    console.log(myObj);
    this.http.post("http://localhost:8080/api/users", JSON.stringify(myObj), this.options)
    .map((res: Response) => 
        res.json()
    ).subscribe(res=>{
      this.test=res;
      console.log(this.test);
      if(res.id!=null && res.email!=null && res.password!=null){
        console.log("saved");
        alert("Utilisateur Enregistré avec succés");

      }else
      {
        console.log("not saved");
        alert("Email déja existant");

      }
      
    });

  } 

  login(userM:User) {
   
    var myObj = { "email":this.userM.email,"password":this.userM.password};
    console.log(myObj);
    this.http.post("http://localhost:8080/api/login", JSON.stringify(myObj), this.options)
    .map((res: Response) => 
      res.json()
       
    ).subscribe(res=>{
      this.test=res;
      console.log(this.test);
      if(res.id!=null && res.email!=null && res.password!=null){
        console.log(res.id);
        this.user.setUserLoggedIn();
        this.router.navigate(['/shop',res.id]);
      }else
      {
        console.log("erreurr n");
        this.router.navigate(['/']);
        alert("Login Failed ");
      }
      
    });
    
  }
 
}
