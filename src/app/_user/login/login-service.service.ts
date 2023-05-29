import { Injectable } from '@angular/core';
import { HttpClientServiceService } from 'src/app/_core/http-client-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private controllerName = "Login";

  constructor(private _httpClient: HttpClientServiceService) { }

  login(model: { username: string | undefined; password: string | undefined; }): Observable<any> {
    return this._httpClient.post(this.controllerName, model);
  }

  getAllCategories(): Observable<any> {
    return this._httpClient.get(this.controllerName);
  }
}
