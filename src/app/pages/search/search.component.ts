import { Component, OnInit } from '@angular/core';
import {Packages} from "../../components/carousel/carousel.component";
import {HttpErrorResponse} from "@angular/common/http";
import {SearchService} from "../../components/services/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  packages: Packages[] | undefined;

  constructor(private searchService: SearchService) { }

  ngOnInit() {

  }

  public getSearchResults(): void {
    this.searchService.getSearchResults().subscribe(
      (response: Packages[]) => {
        this.packages = response;
        console.log(this.packages);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
