import { Directive, ElementRef, Renderer } from '@angular/core';
@Directive ({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBulr()'
    }
})

export class AutoGrowDirective {
    constructor(private el: ElementRef, private renderer: Renderer) { }
    onFocus() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '500px');
    }
    onBulr() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
    }
}