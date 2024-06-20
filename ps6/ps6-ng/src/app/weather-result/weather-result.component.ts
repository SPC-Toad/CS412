import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-result.component.html',
})
export class WeatherResultComponent {
  @Input() weatherData: any;
}
