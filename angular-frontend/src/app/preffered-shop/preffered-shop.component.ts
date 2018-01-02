import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

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

    this.route.params.subscribe(params => {
      console.log(params);
      this.idUser=params['id'];
      console.log(+params['id']);
   }); 
   console.log(this.idUser);
   
    this.http.get("http://localhost:8080/api/PrefferedShop/"+this.idUser)
    .map(resp=>resp.json())
    .subscribe(data=>{
        this.pageShop=data;
        console.log(this.pageShop);
     },err=>{ console.log(err);
    
    }); 
   
  }

  RemoveShop(){
  
  }
}
