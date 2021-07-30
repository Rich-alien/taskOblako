import {NgModule} from '@angular/core';
import {CommonModule as NgCommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ButtonComponent} from "./button/button.component";
import {HeaderComponent} from "./header/header.component";
import {AngularSvgIconModule} from "angular-svg-icon";
import {TaskComponent} from "./task/task.component";
import {FormTaskComponent} from "./form-task/form-task.component";
import {SelectorComponent} from "./selector/selector.component";
import {FormBasicComponent} from "./form-basic/form-basic.component";
import {TextFieldComponent} from "./text-field/text-field.component";
import {InputFieldComponent} from "./input-field/input-field.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {TimeComponent} from "./time/time.component";
import {TrainingComponent} from "./trening/training.component";
import {NavInformationComponent} from "./nav-information/nav-information.component";
import {FilterComponent} from "./filter/filter.component";


@NgModule({
  imports: [
    NgCommonModule,
    ReactiveFormsModule,
    RouterModule,
    AngularSvgIconModule
  ],
  declarations: [
    ButtonComponent,
    HeaderComponent,
    TaskComponent,
    FormTaskComponent,
    SelectorComponent,
    FormBasicComponent,
    TextFieldComponent,
    InputFieldComponent,
    CalendarComponent,
    TimeComponent,
    TrainingComponent,
    NavInformationComponent,
    FilterComponent
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    TaskComponent,
    FormTaskComponent,
    SelectorComponent,
    FormBasicComponent,
    TextFieldComponent,
    InputFieldComponent,
    CalendarComponent,
    TimeComponent,
    TrainingComponent,
    NavInformationComponent,
    FilterComponent
  ]

})
export class CommonModule {
}
