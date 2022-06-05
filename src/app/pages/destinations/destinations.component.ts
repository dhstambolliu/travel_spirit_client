import { Component, OnInit } from '@angular/core';
import {Packages} from "../../components/carousel/carousel.component";
import {HttpErrorResponse} from "@angular/common/http";
import {PackagesService} from "../../components/services/packages.service";

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  packages: any;

  constructor(private packagesService: PackagesService) { }

  ngOnInit(): void {
    this.getDestinations();
  }

  public getDestinations(): void {
    this.packagesService.getDestinations().subscribe(
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
