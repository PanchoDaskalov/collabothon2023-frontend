import { Injectable, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TestComponentComponent } from './test-component/test-component.component'

import { authInterceptorProviders } from './interceptors/auth.interceptor';

@NgModule({
    declarations: [AppComponent, TestComponentComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [authInterceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule {}
