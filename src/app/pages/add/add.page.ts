import { Component, OnInit } from '@angular/core';
import {Oeuvre} from "../../models/oeuvre";
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";
import {OeuvreService} from "../../services/oeuvre/oeuvre.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  oeuvre = new Oeuvre();

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private oeuvreService: OeuvreService
  ) {}

  ngOnInit() {
  }

  save() {
    this.oeuvreService.add(this.oeuvre).subscribe(async () => {
      const toast = await this.toastCtrl.create({
        message: "Votre destination à été ajoutée",
        duration: 5000,
        color: "success"
      });
      toast.present();
      this.router.navigate(['/']);
    })
  }

}
