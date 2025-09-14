import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService, Product } from './product.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products: Product[];
  filteredProducts: Product[];
  searchTerm = '';
  suggestions: string[] = [];

  constructor(private router: Router, private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.filteredProducts = [...this.products];
  }

  updateSuggestions() {
    const term = this.searchTerm.trim().toLowerCase();

    if (term) {
      // Suggestions from product names
      this.suggestions = this.products
        .map(p => p.name)
        .filter(name => name.toLowerCase().includes(term))
        .slice(0, 5); // limit to 5 hints

      // Filter table
      this.filteredProducts = this.products.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.location.toLowerCase().includes(term) ||
        p.id.toString().includes(term)
      );
    } else {
      this.suggestions = [];
      this.filteredProducts = [...this.products];
    }
  }

  selectSuggestion(suggestion: string) {
    this.searchTerm = suggestion;
    this.updateSuggestions();
    this.suggestions = []; // hide dropdown
  }

  viewDetails(product: Product) {
    this.router.navigate(['/view-details', product.id]);
  }
}