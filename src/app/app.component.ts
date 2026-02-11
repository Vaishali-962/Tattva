import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationCheckerComponent } from './location-checker/location-checker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LocationCheckerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tattva';
}
