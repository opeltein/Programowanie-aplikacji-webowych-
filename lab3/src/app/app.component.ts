import { Component, OnInit } from '@angular/core';
import { WeatherApiResponse } from './models/weather-api-response.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pogodynka';

  responses: WeatherApiResponse[] = [];
  currentResponse?: WeatherApiResponse;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    const savedPlaces = localStorage.getItem('places');
    if (savedPlaces !== null) {
      const places = JSON.parse(savedPlaces) as WeatherApiResponse[];
      
      for (let place of places) {
        this.weatherService.getCityWeather(place.name).subscribe(response => {
          this.responses.push(response);
        });
      }
    }
  }

  onButtonClick(miasto: string) {
    if (this.responses.map(x => x.name).some(x => x.toLowerCase() == miasto.toLowerCase())) {
      alert('Powyżej juz masz pogodę dla tego miasta!');
    }
    else {
      this.weatherService.getCityWeather(miasto).subscribe(response => {
        this.currentResponse = response;
        this.responses.push(response);
        localStorage.setItem('places', JSON.stringify(this.responses));
      }, error => {
        alert('Złe miasto!');
      });
    }
  }
}
