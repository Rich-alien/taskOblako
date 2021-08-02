import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'b-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  eventsData = [
    "Страхование с заботой о клиенте",
    "Главные правила продаж",
    "Первичное обучение КС",
    "Вклады: теория и практика",
    "Очное обучение менеджеров"
  ]

}
