import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormService} from "../../services/form.service";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'b-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTaskComponent {

  constructor(
    private router: Router,
    private formService: FormService,
    private taskService: TaskService
  ) {
  }

  saveBasicInformation() {
    this.taskService.postTaskData(this.formService.setObjectTask()).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      })
  }

  closePopup() {
    this.router.navigate(['']);
  }
}
