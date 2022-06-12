import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Booking} from "../../models/models";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  addBooking(booking: Booking): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/booking/add`, booking, this.httpOptions);
  }
}
