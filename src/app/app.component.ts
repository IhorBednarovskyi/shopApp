import { Component, AfterViewInit, OnInit,
    ViewChild, ElementRef, Renderer2} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {map, share} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('appTitle', {static: false})
    headerTitle: ElementRef<HTMLHeadingElement>;

    currentTime: Observable<Date>;

    private title = 'Shop app';

    constructor(private renderer: Renderer2) {}

    ngOnInit() {
      this.currentTime = interval(1000)
      .pipe(map(() => new Date()));
    }

    ngAfterViewInit() {
        this.renderer.setProperty(this.headerTitle.nativeElement, 'innerHTML', this.title);
    }
}
