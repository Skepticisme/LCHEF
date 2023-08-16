import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetLabelComponent } from './get-label/get-label.component';

const routes: Routes = [
  { path: 'get-label', component: GetLabelComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
