import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBrowserRoutingModule } from './app.browser.routing.module';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { SearchComponent } from './search.component/search.component';

@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'wekudo-website' }),
        BrowserTransferStateModule,
        BrowserAnimationsModule,
        AppModule,
        AppBrowserRoutingModule,
        FormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppBrowserModule {
}