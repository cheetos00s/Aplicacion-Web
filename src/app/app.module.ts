import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './View/nav-bar/app.component';
import { ProductsComponent } from './View/users/users.component';
import { ProductsDetailComponent } from './View/users-detail/users-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './View/users/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsDetailComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
