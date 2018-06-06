import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { ExperienceResolver } from './common/experience.resolver.service';
import { CategoryResolver } from './common/main-category.resolver.service';
import { ExperienceComponent } from './experience.component/experience.component';
import { PrivacyPolicyComponent } from './privacy-policy.component/privacy-policy.component';
import { CustomRouteReuseStrategy } from './router-strategy';

const routes: Routes = [
    {
        path: 'wellness',
        children: [
            {
                path: 'category/:categoryName',
                children: [
                    {
                        path: ':experienceName',
                        component: ExperienceComponent,
                        resolve: {
                            category: CategoryResolver,
                            experience: ExperienceResolver
                        },
                        data: {
                            state: 'experience'
                        }
                    }
                ]
            }
        ]
    },
    {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
        data: {
            title: "Privacy Policy | Wekudo"
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [
        CategoryResolver,
        ExperienceResolver,
        {
            provide: RouteReuseStrategy,
            useClass: CustomRouteReuseStrategy
        }
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}