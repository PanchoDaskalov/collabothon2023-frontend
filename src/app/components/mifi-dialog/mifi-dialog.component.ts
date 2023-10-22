import { Component } from '@angular/core'
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { provideRouter, Route, RouterLink } from '@angular/router';

@Component({
    selector: 'app-mifi-dialog',
    templateUrl: './mifi-dialog.component.html',
    styleUrls: ['./mifi-dialog.component.css'],
    standalone: true,
    imports: [MatDialogModule, MatButtonModule, RouterLink],
})
export class MifiDialogComponent {
  constructor(private dialogRef: MatDialogRef<MifiDialogComponent>){ }

  closeModal() {
    this.dialogRef.close();
  }
}


