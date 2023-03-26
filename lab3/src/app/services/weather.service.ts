import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherApiResponse } from '../models/weather-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpClient: HttpClient) { }

  getCityWeather(city: string) {
    return this.httpClient.get<WeatherApiResponse>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cbeeb4917456a9dc5bef570967628521&units=metric`);
  }
}
