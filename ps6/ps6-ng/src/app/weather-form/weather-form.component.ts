import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather-form.component.html',
})
export class WeatherFormComponent {
  location: string = ''; // Initialize the property

  @Output() weatherData = new EventEmitter<any>();

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    if (this.location && this.location.length > 1) {
      this.weatherService.getWeather(this.location).subscribe(
        (data) => {
          this.weatherData.emit(data);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
