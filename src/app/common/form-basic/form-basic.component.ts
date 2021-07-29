import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {FormService} from "../../services/form.service";

@Component({
  selector: 'b-form-basic',
  templateUrl: './form-basic.component.html',
  styleUrls: ['./form-basic.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBasicComponent implements OnInit {
  eventsData = [
    "Страхование с заботой о клиенте",
    "Главные правила продаж",
    "Первичное обучение КС",
    "Вклады: теория и практика",
    "Очное обучение менеджеров"
  ];

  membersData: string[] = [];
  taskData = [];

  constructor(private taskService: TaskService,
              private formService: FormService) {
  }

  ngOnInit(): void {
    this.formService.getAllMembersData().subscribe(members => {
      this.membersData = members as string[];
    })
  }

  getCountEvent(id: number) {
    return new Array(id);
  }

  getEventName(name: string[]) {
    this.formService.getEventName(name);
  }

  getTraining(training: Object, id: number) {
    this.formService.getTraining(training, id);
  }

  getMembers(members: string[]) {
    this.formService.getMembers(members);
  }
}
