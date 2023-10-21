import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-bank-single',
    templateUrl: './bank-single.component.html',
    styleUrls: ['./bank-single.component.css'],
})
export class BankSingleComponent implements OnInit {
    id: any;
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id')?.toString();
    }
}
