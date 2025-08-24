import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IFruit } from '../IFruit';

@Component({
  selector: 'app-displaylist',
  imports: [CommonModule],
  templateUrl: './displaylist.html',
  styleUrl: './displaylist.css'
})
export class Displaylist {
  // fruits=[{title:"Apple",Description:"Fresh red apple rich in fiber and vitamin C.",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"},
  //   {title:"Banana",Description:"Sweet yellow bananas packed with potassium and energy.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxO3SprngUN8qjTp_noipuf8Rit1xsfMQzRw&s"},
  //   {title:"Orange",Description:"Juicy oranges full of vitamin C and antioxidants.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWy2deoCitSxEOI52ZF-v5s0YK5B74oDSDIQ&s"},
  //   {title:"Strawberry",Description:"Sweet and tangy strawberries loved in desserts.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyNrMcZ0M23j2QThpj-LRovvNdeDPgQNPmQ&s"},
  //   {title:"Mango",Description:"King of fruits, delicious and juicy tropical delight.",image:"https://images.unsplash.com/photo-1627308595229-7830a5c91f9f"},
  //   {title:"Pineapple",Description:"Refreshing tropical fruit great for juices and salads.",image:"https://images.unsplash.com/photo-1502741338009-cac2772e18bc"},
  //   {title:"Grapes",Description:"Small, juicy grapes perfect for snacking and wine.",image:"https://images.unsplash.com/photo-1510626176961-4b57d4fbad03"},
  //   {title:"Watermelon",Description:"Hydrating summer fruit with a sweet and crisp taste.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxENAhbABuZ4kvpG2rxpsREImQcx_QaSvTjg&s"}
  // ];
  
  
  // @Input() img!:string;
  // @Input() name!:string;
  // @Input() desc!:string;
  
  @Input() fruit!:IFruit;
  @Output() remove=new EventEmitter<number>();
  OnClick(id:number){
    this.remove.emit(this.fruit.id);
  }
}
