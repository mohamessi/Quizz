import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FastComponent } from './pages/fast/fast.component';

const routes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'fast', component: FastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
