import { UserService } from '../../services/user.service'
import { Component, OnInit } from '@angular/core'
import { TranslocoService } from '@ngneat/transloco'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    content?: string
    title: string

    constructor(private userService: UserService, private readonly translocoService: TranslocoService) {
        this.title = ''
    }

    ngOnInit() {
        this.title = this.translocoService.translate('hello') + ', Ivan'
        console.log('title', this.title)
        this.userService.getUser().subscribe({
            next: (data) => {
                this.content = data
            },
            error: (err: any) => {
                this.content = JSON.parse(err.error).errorMassage
            },
        })
    }
}
