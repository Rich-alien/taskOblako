import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'b-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeComponent {

  @Output() handleClick: EventEmitter<any> = new EventEmitter();

  private hour: string[] = [];
  private minute: string[] = [];

  getHour(hour: string[]) {
    this.hour = hour;
    this.setData();
  }

  getMinute(minute: string[]) {
    this.minute = minute;
    this.setData();
  }

  setHour(): string {
    return this.hour[0];
  }

  setMinute(): string {
    return this.minute[0];

  }

  setData() {
    this.handleClick.emit({"hour": this.setHour(), "minute": this.setMinute()});
  }
}
