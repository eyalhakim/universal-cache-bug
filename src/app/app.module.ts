import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { EntityService } from './common/event.service';
import { StateService } from './common/state.service';
import { ExperienceComponent } from './experience.component/experience.component';
import { FooterComponent } from './footer.component/footer.component';
import { PlanFooterComponent } from './plan-footer.component/plan-footer.component';
import { PrivacyPolicyComponent } from './privacy-policy.component/privacy-policy.component';
import { SeoService } from './seo.service';

@NgModule({
  declarations: [
    AppComponent,
    PlanFooterComponent,
    ExperienceComponent,
    FooterComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'wekudo-website' }),
    BrowserTransferStateModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SeoService,
    StateService,
    EntityService
  ],
  exports: [
    PlanFooterComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }