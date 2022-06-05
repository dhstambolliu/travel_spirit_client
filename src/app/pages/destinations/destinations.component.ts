import { Component, OnInit } from '@angular/core';
import {Packages} from "../../components/carousel/carousel.component";
import {HttpErrorResponse} from "@angular/common/http";
import {PackagesService} from "../../components/services/packages.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  packages: any;

  constructor(private packagesService: PackagesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.info("Actual query: ", this.route.snapshot.paramMap.get("query"))
    this.getDestinations(this.route.snapshot.paramMap.get("query")!);

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
        this.getDestinations(this.route.snapshot.paramMap.get("query")!);
    })
  }

  public getDestinations(query?:string): void {
    this.packagesService.getDestinations(query).subscribe(
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
