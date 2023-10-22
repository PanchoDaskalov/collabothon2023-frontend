import { Injectable, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { authInterceptorProviders } from './interceptors/auth.interceptor'

import { MatButtonModule } from '@angular/material/button'
import { MatStepperModule } from '@angular/material/stepper'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatIconModule } from '@angular/material/icon'
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog'

import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { WizardComponent } from './components/wizard/wizard.component'
import { LandingPageComponent } from './components/landing-page/landing-page.component'
import { BankListComponent } from './components/bank-list/bank-list.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { BankSingleComponent } from './components/bank-single/bank-single.component'
import { HeaderComponent } from './components/header/header.component'
import { ProfileComponent } from './components/profile/profile.component'
import { FooterComponent } from './components/footer/footer.component'
import { LearnComponent } from './components/learn/learn.component'
import { HubComponent } from './components/hub/hub.component'
import { TranslocoRootModule } from './transloco-root.module'
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component'

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
        ProfileComponent,
        FooterComponent,
        LearnComponent,
        HubComponent,
        LanguageSwitcherComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        TranslocoRootModule,
        MatButtonModule,
        MatStepperModule,
        MatSlideToggleModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
    ],
    providers: [authInterceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule {}
