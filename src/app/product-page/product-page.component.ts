import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  location: string;
}

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  products: Product[] = [
    { id: 1, name: 'Laptop', price: 45000, location: 'Japan, Manila' },
    { id: 2, name: 'Smartphone', price: 25000, location: 'Japan, Cebu' },
    { id: 3, name: 'Headphones', price: 3000, location: 'Japan, Leyte' },
    { id: 4, name: 'Zenith Noise-Cancelling Headset', price: 3299, location: 'Japan, Baguio' },
    { id: 5, name: 'Smart-na-tao', price: 12000, location: 'Japan, Davao' },
    { id: 6, name: 'Tabloids-ni-hao', price: 15000, location: 'China, Iloilo' },
    { id: 7, name: 'Camera ni Batman', price: 28000, location: 'Japan, Bacolod' },
    { id: 8, name: 'Baril ni Ironman', price: 8000, location: 'Japan, Pampanga' },
    { id: 9, name: 'Sabon ni Spiderman', price: 22000, location: 'Japan, Laguna' },
    { id: 10, name: 'Monitor ni Hulk', price: 18000, location: 'Japan, Cavite' },
    { id: 11, name: 'Keyboard ni Thor', price: 7000, location: 'Japan, Bulacan' },
    { id: 12, name: 'Mouse ni Captain America', price: 4000, location: 'Japan, Rizal' },
    { id: 13, name: 'Charger ni Black Widow', price: 3500, location: 'Japan, Tarlac' },
    { id: 14, name: 'Speaker ni Doctor Strange', price: 6000, location: 'Japan, Zambales' },
    { id: 15, name: 'Router ni Hawkeye', price: 5000, location: 'Japan, Nueva Ecija' },
    { id: 16, name: 'Printer ni Black Panther', price: 8000, location: 'Japan, Quezon' },
    { id: 17, name: 'Scanner ni Captain Marvel', price: 131412, location: 'Japan, Ilalim' },
    { id: 18, name: 'Toilet ni Sir (D ko rin kilala)', price: 1000010000, location: 'Japan, Sa Taas' },
    { id: 19, name: 'Airpods ni Sir (D ko talaga kilala)', price: 70232300, location: 'Japan, Sa Likod' },
    { id: 20, name: 'Charger ni Sir (Kilala nyo na to)', price: 4124243432423434, location: 'Japan, Sa Bubong' }
  ];

  constructor(private router: Router) {}

  viewDetails(product: Product) {
    // Navigate to /view-details/:id
    this.router.navigate(['/view-details', product.id]);
  }
}