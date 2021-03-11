import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
 public productId:number = 0;

 //productId :any;
 // public productId:number = 0;
 // public proId:string = this.productId + '';
 public prod:string =this.productId.toString();
 
  productDetails!:Product;
  constructor(private activatedRoute:ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( data => {
        this.productId = data.id;
      });
    this.productsService.viewProduct(typeof(this.productId)).subscribe(productData =>{
        this.productDetails = productData;
    });
  }

}
