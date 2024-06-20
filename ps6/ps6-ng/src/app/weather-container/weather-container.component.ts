import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherFormComponent } from '../weather-form/weather-form.component';
import { WeatherResultComponent } from '../weather-result/weather-result.component';

@Component({
  selector: 'app-weather-container',
  standalone: true,
  imports: [CommonModule, WeatherFormComponent, WeatherResultComponent],
  templateUrl: './weather-container.component.html',
})
export class WeatherContainerComponent {
  weatherData: any;

  updateWeatherData(data: any) {
    this.weatherData = data;
  }
}
