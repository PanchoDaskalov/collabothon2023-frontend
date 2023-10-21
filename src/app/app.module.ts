import { Injectable, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { WizardComponent } from './components/wizard/wizard.component'

import { authInterceptorProviders } from './interceptors/auth.interceptor'
import { LandingPageComponent } from './components/landing-page/landing-page.component'
import { BankListComponent } from './components/bank-list/bank-list.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { BankSingleComponent } from './components/bank-single/bank-single.component'
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        WizardComponent,
        LandingPageComponent,
        BankListComponent,
        PageNotFoundComponent,
        BankSingleComponent,
        HeaderComponent,
    ],
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
