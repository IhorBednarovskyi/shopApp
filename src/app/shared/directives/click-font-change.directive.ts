import { Directive, Renderer2, ElementRef,
    HostListener} from '@angular/core';

@Directive({
  selector: '[appClickFontChange]'
})
export class ClickFontChangeDirective {
    private fontWeight = 600;

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    @HostListener('click') onClick() {
        this.renderer.setStyle(this.el.nativeElement, 'font-weight', this.fontWeight);
    }
}
