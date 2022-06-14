import {Injectable} from '@angular/core';
import {NewsLetter} from "../../models/models";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  addNewsLetterEmail(newsLetter: NewsLetter) {
    return this.http.post<NewsLetter>(`${this.apiServerUrl}/newsletter/add`, newsLetter, this.httpOptions);
  }
}
