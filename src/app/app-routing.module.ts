import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApodComponent } from './components/apod/apod.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [ 
  { path: '',
    component: MainComponent},
  { path: 'apod',
  component: ApodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
