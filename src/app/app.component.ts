import { Component, AfterViewInit,
    ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    @ViewChild('appTitle', {static: false})
    headerTitle: ElementRef<HTMLHeadingElement>;

    private title = 'Shop app';

    ngAfterViewInit() {
      // Как вариант можно использовать Renderer2
        this.headerTitle.nativeElement.innerText = this.title;
    }
}
