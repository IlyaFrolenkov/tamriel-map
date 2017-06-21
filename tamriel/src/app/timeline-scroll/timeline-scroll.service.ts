import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { CityMarker } from "./../models/cityMarker";

@Injectable()
export class TimelineScrollService {

  constructor(private http: Http) {
  }

  private allCitiesUrl: string = "http://10.143.13.41:451/api/cities"

  getCities(): Observable<CityMarker[]> {
    return this.http.get(this.allCitiesUrl, {
      headers: this.appendCORSHeaders()
    }).map(this.extractCities);
  }

  private extractCities(res: Response): CityMarker[] {
    let body = res.json();
    return [new CityMarker("1", 250, 350, "")]
  }

  private appendCORSHeaders(): Headers {
    var headers = new Headers();
    /*headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Headers", "X-Requested-With");
    headers.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");*/
    return headers;
  }

}
