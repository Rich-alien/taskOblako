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

  isBasic: boolean = true;

  constructor(
    private router: Router,
    private formService: FormService,
    private taskService: TaskService
  ) {
  }

  openBasicForm() {
    this.isBasic = true;
  }

  openMemberForm() {
    this.isBasic = false;
  }

  saveBasicInformation() {
    this.taskService.postTaskData(this.formService.setObjectTask()).subscribe(
      () => {
      },
      () => {
      })
  }

  closePopup() {
    this.router.navigate(['']);
  }
}
