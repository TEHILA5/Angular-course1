import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Citizen } from './citizen/citizen';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Citizen],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lesson1');
}
