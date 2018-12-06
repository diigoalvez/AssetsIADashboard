import { Injectable } from '@angular/core';
import { TokenService } from '../tokenService/token.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  chartArrays: string[] = ["RequestCount", "ResponseTime", "Error"];
  // chartUrl: string = "https://santanderdashboardava.azurewebsites.net/api/Dashboard";
  chartUrl: string = "http://localhost:7071/api/Dashboard";
  functionKey: string = "AwEe5w1VnK6ojLLEk9vxcvsn2pPxaC3WuX3SfRlP7Dl2500UQCZVbA=="
  charts: any[] = [];

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  public GetChartTelemetry(chartId: string, token: string): Observable<any> {

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('x-functions-key', this.functionKey);
    headers = headers.append('Authorization', "Bearer " + token);

    return this.http.get(this.chartUrl + "?telemetryType=" + chartId, { headers: headers });
  }
}
