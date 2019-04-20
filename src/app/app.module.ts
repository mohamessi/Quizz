import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FastComponent } from './pages/fast/fast.component';
import { PersonalizedComponent } from './pages/personalized/personalized.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FastComponent,
    PersonalizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
