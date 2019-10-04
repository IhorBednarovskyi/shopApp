import { Directive, Renderer2, ElementRef,
    HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appItemHover]'
})
export class ItemHoverDirective {
    private bgroundColor = 'gray-bground';

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    @HostBinding('class') className = 'col-xs-6 col-lg-4 shop-card-body';

    @HostListener('mouseover') onMouseOver() {
        this.renderer.addClass(this.el.nativeElement, this.bgroundColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.removeClass(this.el.nativeElement, this.bgroundColor);
    }
}
