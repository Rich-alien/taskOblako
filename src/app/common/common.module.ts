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
import {TimeComponent} from "./time/time.component";
import {TrainingComponent} from "./trening/training.component";
import {NavInformationComponent} from "./nav-information/nav-information.component";
import {FilterComponent} from "./filter/filter.component";
import {CalendarComponent} from "./calendare/calendar.component";
import {ConditionsComponent} from "./conditions/conditions.component";
import {SearchComponent} from "./search/search.component";
import {FilterSettingComponent} from "./filter-setting/filter-setting.component";
import {PeopleListComponent} from "./people-list/people-list.component";
import {ChooseTextComponent} from "./choose-text/choose-text.component";


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
    CalendarComponent,
    TimeComponent,
    TrainingComponent,
    NavInformationComponent,
    FilterComponent,
    ConditionsComponent,
    SearchComponent,
    FilterSettingComponent,
    PeopleListComponent,
    ChooseTextComponent
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    TaskComponent,
    FormTaskComponent,
    SelectorComponent,
    FormBasicComponent,
    TextFieldComponent,
    CalendarComponent,
    TimeComponent,
    TrainingComponent,
    NavInformationComponent,
    FilterComponent,
    ConditionsComponent,
    SearchComponent,
    FilterSettingComponent,
    PeopleListComponent,
    ChooseTextComponent
  ]

})
export class CommonModule {
}
