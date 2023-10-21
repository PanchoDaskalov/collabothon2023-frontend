import { Directionality } from '@angular/cdk/bidi';
import { Component, ViewChild, OnInit } from '@angular/core'
import { MatStepper } from '@angular/material/stepper'

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.css'],
})
export class WizardComponent implements OnInit {
    // @ViewChild('stepper') stepper: MatStepper

    constructor() {      
      
    }

    ngOnInit(): void {
      // this.stepper = new MatStepper;
    }

    /* onStartClicked() {
        // complete the current step
        this.stepper.selected.completed = true
        // move to next step
        this.stepper.next()
    } */
}

// https://stackoverflow.com/questions/46933953/angular-material-stepper-disable-header-navigation
