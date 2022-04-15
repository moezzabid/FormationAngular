import {Component, OnInit} from '@angular/core';
import {product} from "./product";
import {ProductService} from "../service/product.service";

import {Subscription} from "rxjs";

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pageTitle = "Product List";
  imageWidth = 50;
  imageMargin = 2;
  isShow: boolean = false;
  errorMessage: string = '';
  sub!:Subscription;
  private _listFilter: string = "";

  constructor(private productService: ProductService) {
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filterProduct = this.filter(value);
  }

  onRatingClicked(message: string) {
    this.pageTitle = "Product list" + message;

  }

  filterProduct: product[] = [];
  products: product[] = [];


  showToogle(): void {
    this.isShow = !this.isShow;

  }

  filter(filterBy: string): product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((productt: product) =>
      productt.productName?.toLocaleLowerCase().includes(filterBy));


  }

  ngOnInit(): void {
  this.sub=this.productService.getProduct().subscribe(data => {
      this.products = data;

    });

    this.filterProduct = this.products;
    this.listFilter = "";
  }
  ngOnDestroy():void {
    this.sub.unsubscribe();
  }

}
