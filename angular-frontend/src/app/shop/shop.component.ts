import { Component, OnInit } from '@angular/core';
//import { Shop } from '../../module/Shop';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { UserService } from '../service/user.service';
import { Shop } from '../../module/Shop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  pageShop:any;
  //s:Shop=new Shop();
  idUser:string="";
  constructor(private http:Http,private user:UserService,private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.http.get("http://localhost:8080/api/shops")
    .map(resp=>resp.json())
    .subscribe(data=>{
        this.pageShop=data;
        console.log(this.pageShop);
     },err=>{ console.log(err);
    
    }); 
   
  }

  likeShop(idShop:Shop){
    console.log(idShop);
    console.log("hehoo");

    this.route.params.subscribe(params => {
      console.log(params);
      this.idUser=params['id'];
      console.log(+params['id']);
   }); 
   console.log(this.idUser);
   
    this.http.get("http://localhost:8080/api/PrefferedShop/"+this.idUser+"/"+idShop)
    .map(resp=>resp.json())
    .subscribe(data=>{
       // this.pageShop=data;
        //console.log(this.pageShop);
     },err=>{ console.log(err);
    
    }); 
   
   
   
  }

}
