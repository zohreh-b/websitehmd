import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './homepage/post/post.component';
import { IndustryComponent } from './industry/industry.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path:'',component:PostComponent},
  {path:'industry',component:IndustryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
