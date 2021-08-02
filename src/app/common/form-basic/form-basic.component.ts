import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {FormService} from "../../services/form.service";

@Component({
  selector: 'b-form-basic',
  templateUrl: './form-basic.component.html',
  styleUrls: ['./form-basic.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBasicComponent implements OnInit {
  @Input()
  switchForm: boolean = true;

  eventsData = [
    "Страхование с заботой о клиенте",
    "Главные правила продаж",
    "Первичное обучение КС",
    "Вклады: теория и практика",
    "Очное обучение менеджеров"
  ];
  groupData = [
    "Администрирование",
    "Дизайн",
    "Фронт",
    "Бэкенд"
  ];
  positionData = [
    "Менеджер",
    "Джун",
    "Мидл",
    "Сенсей",
    "СенсейX2"
  ];
  experienceData = [
    "1-2 лет",
    "2-3 лет",
    "3-4 лет",
    "4-5 лет",
    "5-6 лет"
  ];

  membersData: string[] = [];
  taskData = [];

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

  constructor(private taskService: TaskService,
              private formService: FormService) {
  }

  ngOnInit(): void {
    this.formService.getAllMembersData().subscribe(members => {
      this.membersData = members as string[];
    })
  }


}
