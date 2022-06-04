import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Packages} from "../carousel/carousel.component";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getPackages(): Observable<Packages[]> {
    return this.http.get<Packages[]>(`${this.apiServerUrl}/packages/carousel`)
  }
}