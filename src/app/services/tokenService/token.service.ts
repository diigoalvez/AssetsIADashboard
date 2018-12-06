import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  // tokenUrl: string = "https://santanderdashboardava.azurewebsites.net/api/login";
  tokenUrl: string = "http://localhost:7071/api/login";
  tokenBody: any = {
    "tenantId": "rodrigo",
    "secretKey": "teste"
  };

  constructor(private http: HttpClient) { }

  public GetToken(): Observable<any> {
    return this.http.post(this.tokenUrl, this.tokenBody);
  }
}
