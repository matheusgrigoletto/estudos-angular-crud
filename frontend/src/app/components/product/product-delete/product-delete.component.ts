import { ProductService } from './../../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductService,
  ) { }

  product: Product = {
    name: '',
    price: null,
  };

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsService.readById(id).subscribe(product => this.product = product);
  }

  deleteProduct(): void {
    this.productsService.delete(this.product.id).subscribe(() => {
      this.productsService.showMessage('Produto excluído com sucesso!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
