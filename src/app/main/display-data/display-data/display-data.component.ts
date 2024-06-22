import { Component, OnInit } from '@angular/core';
import { DataService, WeatherData } from '../../service/data.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.less'],
  standalone: false,
})
export class DisplayDataComponent {
  public status: string = '';
  public date: string = '';
  public temperatureC: number = 0;
  public summary: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (response: WeatherData[]) => {
        this.status = 'GET OK';
        this.date = response[0].date;
        this.temperatureC = response[0].temperatureC;
        this.summary = response[0].summary;
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.status = 'Error fetching data';
      }
    );
  }
}
