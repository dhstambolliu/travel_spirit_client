import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Contact} from "../../models/models";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.apiServerUrl}/contact/add`, contact, this.httpOptions);
  }
}
