import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

export interface City {
  id: number;
  name: string;
  country: string;
  continent: string;
}

export interface Package {
  id: number;
  name: string;
  price: number;
  description: string;
  duration: number;
  promotionalOffer: boolean;
  promotionalOfferPrice: number;
  featured: boolean;
  imageUrl: any;
  active: boolean;
  cityId: number;
}

@Injectable({
  providedIn: 'root'
})
export class AddNewPackagesService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  addCity(city: City): Observable<City> {
    return this.http.post<City>(`${this.apiServerUrl}/city/add`, city, this.httpOptions);
  }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(`${this.apiServerUrl}/city/all`)
  }

  addPackage(param: Package) {
    return this.http.post<Package>(`${this.apiServerUrl}/packages/add`, param, this.httpOptions);
  }
}
