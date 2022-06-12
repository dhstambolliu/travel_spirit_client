import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {PackagesService} from "../services/packages.service";
import {Packages} from "../../models/models";

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss']
})
export class PromotionListComponent implements OnInit {
  packages: Packages[] | any;
  loader: boolean = false;

  constructor(private packagesService: PackagesService) {
  }

  ngOnInit(): void {
    this.getPromotionalOffers();
  }

  public getPromotionalOffers(): void {
    this.loader = true;
    this.packagesService.getPromotionalOffers().subscribe(
      (response: Packages[]) => {
        this.packages = response;
        this.loader = false;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.loader = false;
      }
    );
  }

}
