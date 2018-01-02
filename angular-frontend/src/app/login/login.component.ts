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
 
  constructor( private route: ActivatedRoute,private router :Router,private user:UserService,private http:Http,
      private authenticationService: AuthenticationService  ) { }

  ngOnInit() {
    //this.authenticationService.logout();
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

   
  }

  /*loginUser(e){
    e.preventDefault();
    console.log(e);
    var email=e.target.elements[0].value;
    var password=e.target.elements[1].value;
    
    console.log(email,password);
    if(email=='admin'&& password=='admin')
    {
      this.user.setUserLoggedIn();
      this.router.navigate(['shop']);
    }
    return false;
  }*/
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
   /* this.loading = true;

    this.authenticationService.login(this.userM.email, this.userM.password)
        .subscribe(
            data => {
              this.router.navigate([this.returnUrl]);
            },
            error => {
                //this.alertService.error(error);
                this.loading = false;
            });
            
    */  
    
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
