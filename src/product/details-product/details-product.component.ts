import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {product} from "../product";

@Component({
  selector: 'pm-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {
  pageTitle:string="details-product";
  product:product |undefined ;

  constructor(private route:ActivatedRoute,private  router:Router) { }

  onBack(){
    this.router.navigate(['/welcome']);
  }


  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.pageTitle+=`: ${id}`
  }

}
