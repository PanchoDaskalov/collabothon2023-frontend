import { UserService } from '../../services/user.service'
import { Component, OnInit } from '@angular/core'


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    content?: string

    banklist!: any
    learnlist!: any
    hublist!: any

    constructor(private userService: UserService) {
      this.banklist = [
        {
          name: "DSK Bank",
          img: "coba-logo.png",
          id: "dsk",
          flagInProgress: true,
          flagCompliant: true
        },
        {
          name: "FIB",
          img: "coba-logo.png",
          id: "fib",
          flagInProgress: false,
          flagCompliant: true
        },
        {
          name: "Societe Generale",
          id: "societegenerale",
          img: "coba-logo.png",
          flagInProgress: false,
          flagCompliant: true
        }
      ];

      this.learnlist = [
        {
          name: "Intro to finance in Germany",
          flagDone: false,
          id: "intro-to-finance"
        },
        {
          name: "How to open a bank account",
          flagDone: false,
          id: "how-to-open-bank-account"
        },
        {
          name: "Taxes in Germany",
          flagDone: false,
          id: "taxes-in-germany"
        }
      ]

      this.hublist = [
        {
          name: "Community forum",
          icon: "home",
          readingTime: 3
        },
        {
          name: "Job board",
          icon: "home",
          readingTime: 4
        },
        {
          name: "Community Events",
          icon: "home",
          readingTime: 5
        }
      ]
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
