import { Component, OnInit } from '@angular/core';
//import { Shop } from '../../module/Shop';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  pageShop:any;
  //salle:Shop=new Shop();

  constructor(private http:Http) { }

  ngOnInit() {
    
    this.http.get("http://localhost:8080/api/shops")
    .map(resp=>resp.json())
    .subscribe(data=>{
        this.pageShop=data;
        console.log(this.pageShop);
     },err=>{ console.log(err);
    
    }); 
   
  }

}
