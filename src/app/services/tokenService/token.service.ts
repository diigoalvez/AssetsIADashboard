import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  tokenUrl: string = "http://santanderdashboardava.azurewebsites.net/api/login";
  tokenBody: any = {
    "tenantId": "rodrigo",
    "secretKey": "teste"
  };

  constructor(private http: HttpClient) { }

  public GetToken(): Observable<any> {
    return this.http.post(this.tokenUrl, this.tokenBody);
  }
}
