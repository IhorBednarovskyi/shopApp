import { Directive, Renderer2, ElementRef,
    HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appItemHover]'
})
export class ItemHoverDirective {
    private bgroundColorClass = 'gray-bground';

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    @HostBinding('class') className = 'shop-card-body';

    @HostListener('mouseover') onMouseOver() {
        this.renderer.addClass(this.el.nativeElement, this.bgroundColorClass);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.removeClass(this.el.nativeElement, this.bgroundColorClass);
    }
}
