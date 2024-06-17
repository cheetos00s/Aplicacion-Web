import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/Models/User.model';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class ProductsComponent implements OnInit{

  productsList: Iuser[] = [];
  searchText: any;

  constructor(private _apiService: ApiService) {
    
  }

  ngOnInit(): void {
      this._apiService.getAllUsers().subscribe((data: Iuser[]) => {
          this.productsList = data;
      })
  }

}
