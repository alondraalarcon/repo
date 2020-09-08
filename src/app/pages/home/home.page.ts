import { Component, OnInit } from '@angular/core';
import { ProductAPIService } from '../../services/product-api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  products: any;
  constructor(private productAPIService: ProductAPIService, private loadingCtrl: LoadingController) {
    this.getProducts();
   }

  ngOnInit() {
  }

  async getProducts(){
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
    });

    await loading.present();

    this.productAPIService.getProductCategories().subscribe((response) => {
      this.products = response;
      this.loadingCtrl.dismiss();
    });
  }

}
