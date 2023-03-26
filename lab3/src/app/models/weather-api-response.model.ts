import { Coordinates } from "./coord.model";
import { Weather } from "./weather.model";

export interface WeatherApiResponse {
  coord: Coordinates;
  cod: number;
  name: string;
  id: number;
  weather: Weather[];
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  }
}