import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Productservice } from '../product-service';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-productadd',
  imports: [FormsModule],
  templateUrl: './productadd.html',
  styleUrl: './productadd.css'
})
export class Productadd {
  product: Product = {
    name: '',
    category: '',
    price: 0
  };

  constructor(private productService: Productservice, private router: Router) { }

  submit() {
    if (!this.product.name || !this.product.category || this.product.price <= 0) {
      alert('Please fill all fields with valid values');
      return;
    }

    this.productService.addProduct(this.product).subscribe({
      next: () => {
        console.log('Product added successfully');
        this.router.navigate(['/productlist']);
      },
      error: (error) => {
        console.error('Error adding product:', error);
      }
    });
  }
}