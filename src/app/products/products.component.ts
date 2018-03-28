import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products1: any = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  products: any = [
      { name: 'Redmi Note 4 (Gold, 64 GB)', price: 'Rs: 11,999',
       image: 'https://rukminim1.flixcart.com/image/312/312/mobile/y/u/a/mi-redmi-note-4-na-original-imaeqdxgrdhxgkcx.jpeg?q=70', 
                description: {
                  ram: '4GB RAM | 64GB ROM | Expandable Upto 128 GB',
                  display: '5.5 inch Full HD Display',
                  camera: '13 MP Rear Camera | 5MP Front Camera',
                  battery: '4100 mAh Li-Polymer Battery',
                  processor: 'Qualcomm Snapdragon 625 64-bit Octa Core 2GHz Processor'
                }
      },
      {  name: 'Xolo ERA 2V (Jet Black, 16GB)', price: 'Rs: 6,999', 
      image: 'https://rukminim1.flixcart.com/image/312/312/j8t35ow0/mobile/z/4/3/xolo-era-2v-era-2v-original-imaeynpgrzebkzgg.jpeg?q=70', 
                description: {
                  ram: '4GB RAM | 64GB ROM | Expandable Upto 128 GB',
                  display: '5.5 inch Full HD Display',
                  camera: '13 MP Rear Camera | 5MP Front Camera',
                  battery: '4100 mAh Li-Polymer Battery',
                  processor: 'Qualcomm Snapdragon 625 64-bit Octa Core 2GHz Processor'
                }
      },
      {  name: 'MOTO E4 Plus (Iron Gray, 32GB)', price: 'Rs: 9,999', 
      image: 'https://rukminim1.flixcart.com/image/312/312/j62hrww0/mobile/n/f/8/motorola-moto-e4-plus-xt1770-original-imaeup4xeqsasemx.jpeg?q=70', 
                description: {
                  ram: '4GB RAM | 64GB ROM | Expandable Upto 128 GB',
                  display: '5.5 inch Full HD Display',
                  camera: '13 MP Rear Camera | 5MP Front Camera',
                  battery: '4100 mAh Li-Polymer Battery',
                  processor: 'Qualcomm Snapdragon 625 64-bit Octa Core 2GHz Processor'
                }  
      },
      {  name: 'OPPO F3 (Gold, 64GB)', price: 'Rs: 18,990', 
      image: 'https://rukminim1.flixcart.com/image/312/312/j2c6du80/mobile/6/y/c/oppo-f3-cph1609-original-imaetmmfgaqnjrbe.jpeg?q=70', 
                description: {
                  ram: '4GB RAM | 64GB ROM | Expandable Upto 128 GB',
                  display: '5.5 inch Full HD Display',
                  camera: '13 MP Rear Camera | 5MP Front Camera',
                  battery: '4100 mAh Li-Polymer Battery',
                  processor: 'Qualcomm Snapdragon 625 64-bit Octa Core 2GHz Processor'
                }        
      },
      {  name: 'Samsung Galaxy On5 (Gold, 8 GB)', price: 'Rs: 6,990', 
      image: 'https://rukminim1.flixcart.com/image/312/312/mobile/r/3/q/samsung-galaxy-on7-sm-g600f-original-imaecqkgzeuz9ebn.jpeg?q=70', 
                description: {
                  ram: '4GB RAM | 64GB ROM | Expandable Upto 128 GB',
                  display: '5.5 inch Full HD Display',
                  camera: '13 MP Rear Camera | 5MP Front Camera',
                  battery: '4100 mAh Li-Polymer Battery',
                  processor: 'Qualcomm Snapdragon 625 64-bit Octa Core 2GHz Processor'
                }
      },
      {  name: 'Moto C Plus (Pearl White, 16 GB)', price: 'Rs: 6,999', 
      image: 'https://rukminim1.flixcart.com/image/312/312/j3lwh3k0/mobile/b/s/f/motorola-moto-c-plus-xt1721-original-imaeup4xck2gdxzj.jpeg?q=70', 
                description: {
                  ram: '4GB RAM | 64GB ROM | Expandable Upto 128 GB',
                  display: '5.5 inch Full HD Display',
                  camera: '13 MP Rear Camera | 5MP Front Camera',
                  battery: '4100 mAh Li-Polymer Battery',
                  processor: 'Qualcomm Snapdragon 625 64-bit Octa Core 2GHz Processor'
                }
      },
      {  name: 'Lenovo K8 Plus (Venom Black, 32GB)', price: 'Rs: 6,999', 
      image: 'https://rukminim1.flixcart.com/image/312/312/j7gi6q80/mobile/p/t/d/lenovo-k8-plus-pa8c0003in-original-imaexp2rupxj9w5f.jpeg?q=70', 
            description: {
                ram: '4GB RAM | 64GB ROM | Expandable Upto 128 GB',
                display: '5.5 inch Full HD Display',
                camera: '13 MP Rear Camera | 5MP Front Camera',
                battery: '4100 mAh Li-Polymer Battery',
                processor: 'Qualcomm Snapdragon 625 64-bit Octa Core 2GHz Processor'
            }
      },
      {  name: 'Samsung Galaxy On Max(Black, 32 GB)', price: 'Rs: 15,999', 
      image: 'https://rukminim1.flixcart.com/image/312/312/j4sronk0/mobile/e/n/w/samsung-on-max-sm-g615fzkuins-original-imaevmfxesgjatny.jpeg?q=70', 
            description: {
                ram: '4GB RAM | 64GB ROM | Expandable Upto 128 GB',
                display: '5.5 inch Full HD Display',
                camera: '13 MP Rear Camera | 5MP Front Camera',
                battery: '4100 mAh Li-Polymer Battery',
                processor: 'Qualcomm Snapdragon 625 64-bit Octa Core 2GHz Processor'
            }
      },
      {  name: 'Celkon Diamond UFEEL 4G (White & Gold, 16 GB)', price: 'Rs: 4,999', 
        image: 'https://rukminim1.flixcart.com/image/312/312/j83d8cw0/mobile/h/y/m/celkon-diamond-ufeel-4g-diamond-ufeel-4g-original-imaey52cvzgmv7zf.jpeg?q=70', 
              description: {
                  ram: '4GB RAM | 64GB ROM | Expandable Upto 128 GB',
                  display: '5.5 inch Full HD Display',
                  camera: '13 MP Rear Camera | 5MP Front Camera',
                  battery: '4100 mAh Li-Polymer Battery',
                  processor: 'Qualcomm Snapdragon 625 64-bit Octa Core 2GHz Processor'
              }
      },
      {  name: 'Infinix Note 4 (Champagne Gold, 32 GB)', price: 'Rs: 4,999' , 
        image: 'https://rukminim1.flixcart.com/image/312/312/j5shoy80/mobile/j/r/a/infinix-note-4-x-572-original-imaeweh3qrhqejjr.jpeg?q=70', 
              description: {
                  ram: '4GB RAM | 64GB ROM | Expandable Upto 128 GB',
                  display: '5.5 inch Full HD Display',
                  camera: '13 MP Rear Camera | 5MP Front Camera',
                  battery: '4100 mAh Li-Polymer Battery',
                  processor: 'Qualcomm Snapdragon 625 64-bit Octa Core 2GHz Processor'
              }
      }
    ];

    addToCart(product, index){
      //console.log(product)
      console.log(index);
      this.products1.push(product);
      console.log(this.products1);
      this.cartService.SendProduct(this.products1);
    }

}
