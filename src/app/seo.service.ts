
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Injectable()
export class SeoService {

  public constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
  ) { }

  public addSeoData(): void {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe(() => {
      var root = this.router.routerState.snapshot.root;
      while (root) {
        if (root.children && root.children.length && root.children[0].data["title"]) {
          root = root.children[0];
        } else if (root.data && root.data["title"]) {
          this.titleService.setTitle(root.data["title"]);
          let tags = root.data["metatags"];
          for (let tag in tags) {
            this.metaService.addTag({ name: tag, content: tags[tag] });
          }
          return;
        } else {
          return;
        }
      }
    });
  }
}
