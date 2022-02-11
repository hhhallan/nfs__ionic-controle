import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoaderComponent} from "../../components/loader/loader.component";
import {ErrorComponent} from "../../components/error/error.component";
import {HeaderComponent} from "../../components/header/header.component";

const directives: Array<any> = [
  LoaderComponent,
]

@NgModule({
    declarations: [
        directives,
        ErrorComponent,
        HeaderComponent
    ],
  imports: [
    CommonModule
  ],
    exports: [
        directives,
        ErrorComponent,
        HeaderComponent
    ]
})
export class SharedModule { }
