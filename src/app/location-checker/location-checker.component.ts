import { Component } from '@angular/core';
import { timeout } from 'rxjs';

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
  isDetectLocationMethodCalled :boolean = false;
  detectLocation(){
    this.isDetectLocationMethodCalled = true;
    console.log("Button is clicked!");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.long = pos.coords.longitude;
        this.lat = pos.coords.latitude;
        console.log(this.long);
        console.log(this.lat);
      },
      (err) => {console.log("Error :: " + err.message)},
      {enableHighAccuracy : true, timeout : 5000}
    )
  }
}
