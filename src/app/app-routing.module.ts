import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './View/users/users.component';
import { ProductsDetailComponent } from './View/users-detail/users-detail.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent},
  { path: 'products/:productsId', component: ProductsDetailComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
