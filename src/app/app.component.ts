import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SeoService } from './seo.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(seoService: SeoService, private router: Router, @Inject(PLATFORM_ID) private platformId: string) {
    seoService.addSeoData();
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe(evt => {
        if (evt instanceof NavigationEnd) {
          window.scrollTo(0, 0);
        }
      });

      if (!("ontouchstart" in document.documentElement)) {
        (<HTMLElement>document.documentElement).className += " no-touch";
      }
    }
  }
}
