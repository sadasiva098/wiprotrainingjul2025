import { Component } from '@angular/core';
import { Displaylist } from '../displaylist/displaylist';
import { CommonModule } from '@angular/common';
import { IFruit } from '../IFruit';

@Component({
  selector: 'app-home',
  imports: [Displaylist,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  fruits:IFruit[]=[{id:0,title:"Apple",description:"Fresh red apple rich in fiber and vitamin C.",image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"},
    {id:1,title:"Banana",description:"Sweet yellow bananas packed with potassium and energy.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxO3SprngUN8qjTp_noipuf8Rit1xsfMQzRw&s"},
    {id:2,title:"Orange",description:"Juicy oranges full of vitamin C and antioxidants.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWy2deoCitSxEOI52ZF-v5s0YK5B74oDSDIQ&s"},
    {id:3,title:"Strawberry",description:"Sweet and tangy strawberries loved in desserts.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyNrMcZ0M23j2QThpj-LRovvNdeDPgQNPmQ&s"},
    {id:4,title:"Mango",description:"King of fruits, delicious and juicy tropical delight.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEnqmHwmb3jH5KBntBrMjSocfHUiu3zJKGQ&s"},
    {id:5,title:"Pineapple",description:"Refreshing tropical fruit great for juices and salads.",image:"https://upload.wikimedia.org/wikipedia/commons/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg"},
    {id:6,title:"Grapes",description:"Small, juicy grapes perfect for snacking and wine.",image:"https://hips.hearstapps.com/hmg-prod/images/766/grapes-main-1506688521.jpg?resize=640:*"},
    {id:7,title:"Watermelon",description:"Hydrating summer fruit with a sweet and crisp taste.",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxENAhbABuZ4kvpG2rxpsREImQcx_QaSvTjg&s"}];
  removeFruit(id: number) {
    this.fruits = this.fruits.filter(fruit => fruit.id !== id);
  }
}
