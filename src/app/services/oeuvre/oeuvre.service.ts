import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Oeuvre} from "../../models/oeuvre";

@Injectable({
  providedIn: 'root'
})
export class OeuvreService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Array<any>>(this.url);
  }

  get(id: number) {
    return this.http.get<Array<any>>(this.url + id);
  }

  add(oeuvre: Oeuvre) {
    return this.http.post(this.url, oeuvre);
  }
}
