import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../product-page/product.service';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="bg_main">
    <div class="container py-5" *ngIf="product">
      <h2>{{ product.name }}</h2>
      <p><strong>Price:</strong> {{ product.price | currency:'PHP':'symbol':'1.0-0' }}</p>
      <p><strong>Location:</strong> {{ product.location }}</p>
    </div>
  </div>
  `,
  styleUrls:['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  product!: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
  }
}