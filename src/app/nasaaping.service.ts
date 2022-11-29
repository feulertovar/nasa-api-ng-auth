import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NasaapingService {

    constructor(private http: HttpClient, public oktaAuth: OktaAuthService) {}

    private async request(method: string, url: string, data?: any) {
      const token = await this.oktaAuth.getAccessToken();

      const result = this.http.request(method, url, {
        body: data,
        responseType: 'json',
        observe: 'body',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return new Promise<any>((resolve, reject) => {
        result.subscribe(resolve, reject);
      });
    }

    getProfile() {
      return this.request('GET', `${environment.nasaapiServer}/profile`);
    }

    updateUser(username: any) {
      return this.request('PUT', `${environment.nasaapiServer}/profile`, {username});
    }
}
