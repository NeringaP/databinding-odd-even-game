import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'databinding-odd-even-game';
  numberList = [];

  getNumber(newNumber: number) {
    this.numberList.push(newNumber);
  }
}
