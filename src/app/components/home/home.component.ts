import { UserService } from '../../services/user.service'
import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    content?: string

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        
        /* this.userService.getUser().subscribe({
            next: (data) => {
                this.content = data
            },
            error: (err: any) => {
                this.content = JSON.parse(err.error).errorMassage
            },
        }) */
    }
}
