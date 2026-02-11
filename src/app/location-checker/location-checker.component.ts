import { Component } from '@angular/core';

@Component({
  selector: 'app-location-checker',
  standalone: true,
  imports: [],
  templateUrl: './location-checker.component.html',
  styleUrl: './location-checker.component.css'
})
export class LocationCheckerComponent {
  long : number = 0;
  lat : number = 0;

  detectLocation(){
    console.log("Button is clicked!");
  }
}
