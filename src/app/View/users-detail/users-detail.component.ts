import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/Models/User.model';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class ProductsDetailComponent implements OnInit{

  user?: Iuser;
  userList: Iuser[] = [];
  
  constructor(
    private _routes: ActivatedRoute,
    private _apiService: ApiService
  ){ }
  
  ngOnInit(): void {
    this._routes.params.subscribe(params => {
      this._apiService.getUserById(Number(params['productsId'])).subscribe((data: Iuser) => {
          this.user = data;
      })
      // this.user = this.userList.find(user => user.id == params['productsId']);
    });
    
  }

}
