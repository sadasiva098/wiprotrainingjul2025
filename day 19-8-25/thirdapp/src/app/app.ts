import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { NgClass } from '@angular/common';
import { Ngstyle } from './ngstyle/ngstyle';

@Component({
  selector: 'app-home',
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('thirdapp');
  flag1:boolean=true;
  flag2:boolean=false;
  getNgClass(){
    return ['app1','app2'];
  }
}
