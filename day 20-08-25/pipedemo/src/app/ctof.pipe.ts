import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ctof',
  standalone: true
})
export class CtofPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined || isNaN(value)) return '';
    const fahrenheit = (value * 9 / 5) + 32;
    return `${Math.round(fahrenheit)}F`;
  }
}
