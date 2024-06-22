import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// レスポンスの型定義
export interface WeatherData {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://localhost:44345/WeatherForecast';

  constructor(private http: HttpClient) { }

  getData(): Observable<WeatherData[]> {
    return this.http.get<WeatherData[]>(this.apiUrl);
  }
}
