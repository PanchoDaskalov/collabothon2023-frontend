import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatStepperModule]
})
export class TestComponentComponent {

}
