import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {AppComponent} from './app.component';
import {CommonModule} from "./common/common.module";
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from "@angular/router";
import {FormTaskComponent} from "./common/form-task/form-task.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    RouterModule.forRoot([
      {path: 'form', component: FormTaskComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
