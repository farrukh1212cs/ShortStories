import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { OrderModule } from "ngx-order-pipe";
import { NgxPaginationModule } from "ngx-pagination";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { ReadstoriesComponent } from './user/readstories/readstories.component';
import { PoststoryComponent } from './user/poststory/poststory.component';
import { ApprovestoryComponent } from './admin/approvestory/approvestory.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { CategoryComponent } from './admin/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    ReadstoriesComponent,
    PoststoryComponent,
    ApprovestoryComponent,
    AccessdeniedComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    OrderModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
