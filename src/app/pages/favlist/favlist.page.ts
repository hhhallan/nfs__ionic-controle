import { Component, OnInit } from '@angular/core';
import {OeuvreService} from "../../services/oeuvre/oeuvre.service";

@Component({
  selector: 'app-favlist',
  templateUrl: './favlist.page.html',
  styleUrls: ['./favlist.page.scss'],
})
export class FavlistPage {
  oeuvres: Array<any>;
  loading = true;

  constructor(private oeuvreService: OeuvreService) {
    this.load();
  }

  load() {
    this.oeuvreService.getAll().subscribe(data => {
      this.oeuvres = data;
      this.loading = false;
    }, () => {
      this.loading = false;
    })
  }


}
