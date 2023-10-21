import { Component, OnInit } from '@angular/core'
import { TranslocoService } from '@ngneat/transloco'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {


    constructor(private translocoService: TranslocoService) {

    }

    ngOnInit(): void {
    }
}
