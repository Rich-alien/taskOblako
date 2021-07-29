import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'b-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent {

  @Output() handleClick: EventEmitter<any> = new EventEmitter();

  private day: string[] = [];
  private month: string[] = [];

  getDay(day: string[]) {
    this.day = day;
    this.setData();
  }

  getMonth(month: string[]) {
    this.month = month;
    this.setData();
  }

  setDay(): string {
    return this.day[0];

  }

  setMonth(): string {
    return this.month[0];
  }

  setData() {
    this.handleClick.emit({"day": this.setDay(), "month": this.setMonth()});
  }
}
