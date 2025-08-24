import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { CtofPipe } from './ctof.pipe';
import { HighlightStrikethroughDirective } from './highlight-strikethrough';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe,FormsModule,DatePipe,CtofPipe,HighlightStrikethroughDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipedemo');

  Text : string = '';
   selectedDateStr: string = '';

  get selectedDate(): Date | null {
    return this.selectedDateStr ? new Date(this.selectedDateStr) : null;
  }

  temperatureC: number = 0;
  
}
