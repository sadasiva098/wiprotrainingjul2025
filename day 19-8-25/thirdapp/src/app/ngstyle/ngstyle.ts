import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  imports: [NgStyle],
  templateUrl: './ngstyle.html',
  styleUrl: './ngstyle.css'
})
export class Ngstyle {
  flag1:boolean=true;
}
