import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FastComponent } from './pages/fast/fast.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './directives/question/question.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FastComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
