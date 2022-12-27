import { Product } from './models/Product';
import { ProductsService } from './services/products.service';
import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuMode = 'static';

  keyword: String;
  products: Product[]

  spinner: Boolean = false

    constructor(private productsService: ProductsService,private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';
    }

    searchProductsByKeyword() {
      console.log(this.keyword)
      this.spinner = true
      this.productsService.searchProductByKeyword(this.keyword).subscribe({
        next: (response: Product[]) => {
          this.products = response.filter(i => i != null)
          this.spinner = false
          console.log(this.products)
        },
        error: (e) => console.log(e),
      })
    }
}
