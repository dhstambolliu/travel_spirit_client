import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

export interface Booking {
  reservationDate?: number;
  people?: string;
  name?: string;
  surname?: string;
  email?: string;
  contact?: string;
  packageId?: string;
}

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

  addBooking(booking: Booking) {
    return this.http.post<Booking>(`${this.apiServerUrl}/booking/add`, booking, this.httpOptions);
  }
}
