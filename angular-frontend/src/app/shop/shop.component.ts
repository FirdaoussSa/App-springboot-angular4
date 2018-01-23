import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserService } from '../service/user.service';
import { Shop } from '../../module/Shop';
import { ActivatedRoute } from '@angular/router';
import { Locations } from '../../module/Locations';
import{RequestOptions,Headers,ResponseContentType,Response}from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  private headers=new Headers({'Content-Type':'application/json'});
  private options =new RequestOptions({headers:this.headers});
  pageShop:any;
  idUser:string="";
  location = new  Locations();
  
  
  constructor(private http:Http,private user:UserService,private route: ActivatedRoute) {
   
   }

  ngOnInit() {
    
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
       
        var myObj = { "latitude":position.coords.latitude,"longitude":position.coords.longitude};
        console.log(myObj);

        this.http.post("http://localhost:8080/api/shops", JSON.stringify(myObj), this.options)
        .map(resp=>resp.json())
        .subscribe(data=>{
        this.pageShop=data;
      
        },err=>{ console.log(err);
    
        }); 
   
        console.log(position.coords); 
      });
    }
    
   
   
  }

  likeShop(idShop:Shop){
    
    //get the user id from the url 
    this.route.params.subscribe(params => {
      
      this.idUser=params['id'];
      
   }); 
   
   
    this.http.get("http://localhost:8080/api/PrefferedShop/"+this.idUser+"/"+idShop)
    .map(resp=>resp.json())
    .subscribe(data=>{
     },err=>{ console.log(err);
    
    }); 
   
   
   
  }

  dislikeShop(idShop:Shop){
    
    
  
    this.route.params.subscribe(params => {
   
      this.idUser=params['id'];
      
    }); 
   console.log(this.idUser);
    this.http.get("http://localhost:8080/api/DislikedShop/"+this.idUser+"/"+idShop)
    .map(resp=>resp.json())
    .subscribe(data=>{
     },err=>{ console.log(err);
    
    });
  }

}
