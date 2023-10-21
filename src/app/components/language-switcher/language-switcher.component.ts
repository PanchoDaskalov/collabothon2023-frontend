import { Component } from '@angular/core'
import { TranslocoService } from '@ngneat/transloco'

@Component({
    selector: 'app-language-switcher',
    templateUrl: './language-switcher.component.html',
    styleUrls: ['./language-switcher.component.css'],
})
export class LanguageSwitcherComponent {
    constructor(private translocoService: TranslocoService) {}
    changeLanguage(e: any) {
        this.translocoService.setActiveLang(e.value)
    }
}
