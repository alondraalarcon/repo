import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { PaymentGatewaysService } from '../../services/payment-gateways.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {


  paymentGateways: any;
  newOrder: any;
  

  constructor(private modalCtrl: ModalController, private loadingCtrl: LoadingController, private paymentGateway: PaymentGatewaysService) { 

      // this.getPaymentGateways();
      this.newOrder = {};
      this.newOrder.billing_address = {};
      this.newOrder.shipping_address = {};
      this.newOrder.shipping_same = false;
   

  }

  ngOnInit() {
  }
  
  // async getPaymentGateways(){
  //   const loading = await this.loadingCtrl.create({
  //     message: 'Please wait...',
  //   });

  //   await loading.present();

  //   this.paymentGateway.getPaymentGateways().subscribe((response) => {
  //     this.paymentGateways = response;
  //     this.loadingCtrl.dismiss();
  //   });
  // }


   
  back(){
    this.modalCtrl.dismiss();
  }

}
