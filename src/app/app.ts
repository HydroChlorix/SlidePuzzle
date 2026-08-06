import { Component, signal } from '@angular/core';
import { MyContainerComponent } from './my-container/my-container.component';

@Component({
  selector: 'app-root',
  imports: [MyContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('slide-puzzle');
}
