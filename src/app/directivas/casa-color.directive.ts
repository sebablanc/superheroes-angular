import { Directive, ElementRef, Input } from '@angular/core';

enum colorCasa {
  marvel='#f14a4a',
  dc='#4242cc',
  default='white'
}

enum casaText {
  marvel='marvel',
  dc='dc'
}


@Directive({
  selector: '[appCasaColor]'
})
export class CasaColorDirective {

  @Input()
  set appCasaColor(casa: string) {
    
    let color = '';
    
    switch (casa.toLowerCase()) {
      case casaText.marvel:
        color = colorCasa.marvel;
        break;
      case casaText.dc:
        color = colorCasa.dc;
        break;
      default:
        color = colorCasa.default;
        break;
    }

    this.el.nativeElement.style.color = color;
  }

  constructor(private el: ElementRef) { }

}
