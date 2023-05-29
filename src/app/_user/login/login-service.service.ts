import { Injectable } from '@angular/core';
import { HttpClientServiceService } from 'src/app/_core/http-client-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  login(model: { username: string | undefined; password: string | undefined; }) {
    throw new Error('Method not implemented.');
  }
  private controllerName = "Login";

  constructor(private _httpClient: HttpClientServiceService) { }
  getAllCategories() {
    return this._httpClient.get(this.controllerName);
  }
}
