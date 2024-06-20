import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'http://localhost:3000/ps6/weather-async'; // URL of your Node.js backend

  constructor(private http: HttpClient) {}

  getWeather(location: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { location });
  }
}
