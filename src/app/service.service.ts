import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  ApiUrl = 'http://localhost:3000/twitter';

  public ApiCall() {
     return this.httpClient.get(this.ApiUrl, { responseType: "json" });
  }

  getUser(name: string) {
    console.log(name);
    return this.httpClient.get(`http://localhost:80/twitter/`, { responseType: "json" });
  }


}
