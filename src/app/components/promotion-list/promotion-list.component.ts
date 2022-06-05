import {Component, OnInit} from '@angular/core';
import {Packages} from "../carousel/carousel.component";
import {HttpErrorResponse} from "@angular/common/http";
import {PackagesService} from "../services/packages.service";

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss']
})
export class PromotionListComponent implements OnInit {
  packages: Packages[] | any;

  constructor(private packagesService: PackagesService) {
  }

  ngOnInit(): void {
    this.getPromotionalOffers();
  }

  public getPromotionalOffers(): void {
    this.packagesService.getPromotionalOffers().subscribe(
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
