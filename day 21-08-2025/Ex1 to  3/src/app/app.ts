import { Component, signal } from '@angular/core';
import { VehicleComp } from './components/vehicle-comp/vehicle-comp';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VehicleComp, HttpClientModule], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ex1');
}
