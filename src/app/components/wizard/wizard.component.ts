import { Directionality } from '@angular/cdk/bidi'
import { Component, ViewChild, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.css'],
})
export class WizardComponent {
    hideLoader: boolean

    constructor(private _router: Router) {
        this.hideLoader = true
    }

    onImageUploaded () {
      this.hideLoader = false
        let that = this
        setTimeout(function () {
            that.hideLoader = true
        }, Math.random() * 500 + 750)
    }

    finishWizard() {
        this.hideLoader = false
        let that = this
        setTimeout(function () {
            that._router.navigate(['/'])
        }, 2500)
    }
}

// https://stackoverflow.com/questions/46933953/angular-material-stepper-disable-header-navigation
