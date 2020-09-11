import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  items: any[] = [];
  total: any;
  showEmptyCartMessage: boolean = false;

  constructor(public storage: Storage, private navCtrl: NavController) { 
    
    this.total = 0.0;

  }

  ionViewWillEnter(){
    this.showEmptyCartMessage = false;

    this.storage.ready().then(()=>{
      this.storage.get("cart").then((data) => {
        this.items = data;
        // console.log(data);

          if (this.items.length > 0){
            this.items.forEach((item, index)=> {
              this.total = this.total + (item.product.price * item.qty)
            });
          }else{
            this.showEmptyCartMessage = true;
          }
      });
    });

  }


  removeFromCart(item, i){
    let price = item.product.price;
    let qty = item.qty;

    this.items.splice(i,1);
    this.storage.set("cart", this.items).then(()=>{
      this.total = this.total - (price * qty);
    });

    if(this.items.length == 0){
      this.showEmptyCartMessage = true;
    }
  }

  back(){
    this.navCtrl.back();
  }

  ngOnInit() {
  }

}
