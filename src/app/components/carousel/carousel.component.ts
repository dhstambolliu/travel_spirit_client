import {Component, OnInit} from '@angular/core';
import {PackagesService} from "../services/packages.service";
import {HttpErrorResponse} from "@angular/common/http";
import {DomSanitizer} from '@angular/platform-browser';
import {Packages} from "../../models/models";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  packages: Packages[] | any;

  responsiveOptions;

  constructor(private packagesService: PackagesService, public domSanitizer: DomSanitizer) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    // @ts-ignore
    this.getPackages();
  }

  public getPackages(): void {
    this.packagesService.getPackages().subscribe(
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
