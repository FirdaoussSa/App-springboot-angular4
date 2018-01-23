import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Shop } from '../../module/Shop';

@Component({
  selector: 'app-preffered-shop',
  templateUrl: './preffered-shop.component.html',
  styleUrls: ['./preffered-shop.component.css']
})
export class PrefferedShopComponent implements OnInit {

  idUser:string="";
  pageShop:any;

  constructor(private http:Http,private route: ActivatedRoute) { }

  ngOnInit() {
    
    //get the user id from the url 
    this.route.params.subscribe(params => {
      console.log(params);
      this.idUser=params['id'];
      console.log(+params['id']);
    }); 
   
    this.http.get("http://localhost:8080/api/PrefferedShop/"+this.idUser)
    .map(resp=>resp.json())
    .subscribe(data=>{
        this.pageShop=data;
       
     },err=>{ console.log(err);
    
    }); 
   
  }

  RemoveShop(idShop:Shop){

    //get the user id from the url 
    this.route.params.subscribe(params => {
      console.log(params);
      this.idUser=params['id'];
      console.log(+params['id']);
    }); 
   
   
    this.http.get("http://localhost:8080/api/RemovePrefferedShop/"+this.idUser+"/"+idShop)
    .map(resp=>resp.json())
    .subscribe(data=>{
     },err=>{ console.log(err);
    
    }); 
   
   
   
  
  }
}
