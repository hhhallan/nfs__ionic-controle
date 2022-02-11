import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OeuvreService} from "../../services/oeuvre/oeuvre.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {
  oeuvre: any;
  loading = true;

  constructor(
    route: ActivatedRoute,
    private oeuvreService: OeuvreService
  ) {
    const id = parseInt(route.snapshot.params.id, 10);
    this.load(id);
  }

  load(id: number) {
    this.oeuvreService.get(id).subscribe(data => {
      this.oeuvre = data;
      this.loading = false;
    }, () => {
      this.loading = false;
    })
  }

  favorite() {
    console.log('add')
    if (this.oeuvre.liked) {
      this.oeuvre.liked = !this.oeuvre.liked;
    } else {
      this.oeuvre.liked = !this.oeuvre.liked;
    }
    console.log(this.oeuvre.liked)
  }

}
