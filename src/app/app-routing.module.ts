import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { WizardComponent } from './components/wizard/wizard.component'
import { LandingPageComponent } from './components/landing-page/landing-page.component'
import { BankListComponent } from './components/bank-list/bank-list.component'
import { BankSingleComponent } from './components/bank-single/bank-single.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { TestComponentComponent } from './components/test-component/test-component.component'
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'wizard', component: WizardComponent },
    { path: 'landing', component: LandingPageComponent },
    { path: 'banks', component: BankListComponent },
    { path: 'banks/:id', component: BankSingleComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: 'test', component: TestComponentComponent },
    { path: 'logout', redirectTo: '/' },
    { path: '**', redirectTo: '/404', pathMatch: 'full' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
