import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/products.service';
import { Category } from '../category';

@Component({
  selector: 'app-sitebar',
  templateUrl: './sitebar.component.html',
  styleUrls: ['./sitebar.component.css']
})
export class SitebarComponent implements OnInit {
  categoryList:any;
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getCategories().subscribe(data =>{
      this.categoryList = data;
    });
  }

}
