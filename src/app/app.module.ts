import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {UsersComponent} from './users.service';
import {HomeComponent} from './home.component';
import {ListComponent} from './list.component';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,HomeComponent, ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, AppRoutingModule
  ],
  providers: [UsersComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
