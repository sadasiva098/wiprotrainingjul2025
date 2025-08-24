import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlightStrikethrough]'
})
export class HighlightStrikethroughDirective {

  constructor(private el: ElementRef) {

   const element = this.el.nativeElement as HTMLElement;

    element.style.display = 'inline';
    element.style.color = 'black';
    element.style.backgroundColor = 'yellow';
    element.style.textDecoration = 'line-through';
  }

}
