import { Component, OnInit, Input } from '@angular/core'
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false,
    // imports: [MatToolbarModule, MatButtonModule, MatIconModule, CommonModule],
})
export class HeaderComponent implements OnInit {

  @Input() pagetitle!: string;
  @Input() subtitle!: string;
  @Input() showPhoto!: boolean;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    // console.log("showPhoto: ", this.showPhoto)
  }
}
