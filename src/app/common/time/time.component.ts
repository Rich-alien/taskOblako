import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'b-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeComponent implements OnInit {
  @Output() handleClick: EventEmitter<any> = new EventEmitter();
  isOpened: boolean = false;
  selectedHour = '';
  selectedMinute = '';
  hourData: string[] = [];
  minuteData: string[] = [];
  hasText: boolean = false;
  timeWithZeroPoint: string[] =
    ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];

  abbreviatedClockDisplay(): string {
    if (this.selectedHour === '' && this.selectedMinute === '') {
      this.hasText = false;
      return '';
    } else {
      this.hasText = true;
      return this.selectedHour + ':' + this.selectedMinute;
    }

  }

  choseHour(hour: string) {
    this.selectedHour = hour;
    this.selectedMinute = this.selectedMinute === '' ? '00' : this.selectedMinute;
    this.setData();
  }

  choseMinute(minute: string) {
    this.selectedMinute = minute;
    this.selectedHour = this.selectedHour === '' ? '00' : this.selectedHour;
    this.setData();
  }

  openClock() {
    this.isOpened = !this.isOpened;
  }

  ngOnInit() {
    for (let time of this.timeWithZeroPoint) {
      this.minuteData.push(time);
      this.hourData.push(time);
    }
    for (let i = 10; i <= 24; i++) {
      this.hourData.push(String(i));
    }
    for (let i = 10; i <= 60; i++) {
      this.minuteData.push(String(i));
    }
  }

  setData() {
    this.handleClick.emit({"hour": this.selectedHour, "minute": this.selectedMinute});
  }
}
