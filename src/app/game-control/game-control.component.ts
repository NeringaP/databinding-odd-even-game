import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {

  @Output() showGameNumber = new EventEmitter<number>();
  gameNumber: number = 0;
  interval;

  onStartGame() {
    const updateGameNumber = () => {
      this.gameNumber++;
      document.getElementById("myNum").innerHTML = this.gameNumber.toString();
      this.showGameNumber.emit(this.gameNumber)
    };
    this.interval = setInterval(updateGameNumber, 1000);
  }

  onStopGame() {
    clearInterval(this.interval)
  }
  


}
