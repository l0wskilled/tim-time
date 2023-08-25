import {Component} from '@angular/core';
import {DateTime} from "luxon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tim Time';
  picked: string | null = null;
  future: DateTime | null = null;

  onClosed(): void {
    if (this.picked) {
      this.future = DateTime.fromFormat(this.picked, 'HH:mm').plus({minutes: this.getRandomArbitrary(15, 60)})

    }
  }

  getRandomArbitrary(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
