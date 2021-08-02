import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'b-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConditionsComponent {


  @Output() handleClick: EventEmitter<string> = new EventEmitter();

  selectItem: string = '';

  conditions: string[] = [
    "Не использовать код доступа",
    "Требовать регистрацию",
    "Запросить только имя и фамилию",
    "Не требовать регистрацию, имя и фамилию"
  ]
  active(condition: string){
    return this.selectItem === condition;
  };

  saveCondition(condition: string) {
    this.selectItem = condition;
    this.handleClick.emit(this.selectItem);
  }
}
