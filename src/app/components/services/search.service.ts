import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Packages} from "../carousel/carousel.component";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getSearchResults(): Observable<Packages[]> {
    return this.http.get<Packages[]>(`${this.apiServerUrl}/packages/filter-data`)
  }
}
