import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { EventInfoResolver } from './common/event-info.resolver.service';
import { SubCategoriesResolver } from './common/sub-categories.resolver.service';
import { CustomRouteReuseStrategy } from './router-strategy';
import { SearchComponent } from './search.component/search.component';

const appRoutes: Routes = [
    {
        path: '',
        component: SearchComponent,
        outlet: 'search'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        SubCategoriesResolver,
        EventInfoResolver,
        {
            provide: RouteReuseStrategy,
            useClass: CustomRouteReuseStrategy
        }
    ],
    exports: [
        RouterModule
    ]
})
export class AppBrowserRoutingModule { }
