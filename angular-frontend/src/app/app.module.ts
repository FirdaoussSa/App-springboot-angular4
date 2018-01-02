import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import{UserService}from './service/user.service';
import{AuthguardGuard}from './service/authguard.guard';
import { FormsModule } from '@angular/forms';
import{AuthenticationService}from'./service/authentication.service';
import { PrefferedShopComponent } from './preffered-shop/preffered-shop.component';

const routes: Routes = [
  
  { path: '', component:LoginComponent},
  { path: 'shop',canActivate:[AuthguardGuard] , component:ShopComponent},
  { path: 'shop/:id', canActivate:[AuthguardGuard],component:ShopComponent},
  { path: 'preffered/:id', canActivate:[AuthguardGuard],component:PrefferedShopComponent},
  { path: '**', component:NotfoundComponent}
  
];

 
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ShopComponent,
    HomeComponent,
    NotfoundComponent,
    LoginComponent,
    PrefferedShopComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),
    HttpModule,FormsModule,HttpClientModule
  ],
  providers: [UserService,AuthguardGuard,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
