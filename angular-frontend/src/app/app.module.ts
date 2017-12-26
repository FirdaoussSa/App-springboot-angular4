import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  
  { path: '', component:HomeComponent},
  { path: 'shop', component:ShopComponent},
  { path: '**', component:NotfoundComponent},
  { path: 'shop/:idShop', component:HomeComponent}
  
];

 
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ShopComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
