import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'b-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {

  @Output() handleClick: EventEmitter<object> = new EventEmitter();

  selectedMonth = 'Январь';

  hasText: boolean = false

  isOpened: boolean = false;

  dayData: number[] = [];

  selectedDay: number = 0;

  isOpenChoseMonth: boolean = false;

  choseYear: number = 2021;

  weeksData: string[] = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  monthData: string[] = ["Январь", "Февраль", "Март", "Апрель", "Май",
    "Июнь", "Июль", "Август", "Сентебрь", "Октябрь", "Ноябрь", "Декабрь"];

  openCalendar(): void {
    this.isOpened = !this.isOpened;
  }

  openChoseMonth(): void {
    this.isOpenChoseMonth = !this.isOpenChoseMonth;
  }

  selectMonth(month: string): void {
    this.selectedMonth = month;
    this.setData();
  }

  selectDay(day: number): void {
    this.selectedDay = day;
    this.setData();
  }

  incrementData(): void {
    if (this.isOpenChoseMonth) {
      this.choseYear++;
      this.setData();
    } else if (!this.isOpenChoseMonth && this.selectedMonth !== "Декабрь") {
      let index = this.monthData.findIndex(el => el === this.selectedMonth);
      this.selectedMonth = this.monthData[index + 1];
      this.setData();
    } else {
      this.choseYear++;
      this.selectedMonth = "Январь";
      this.setData();
    }
  }

  decrementData(): void {
    if (this.isOpenChoseMonth) {
      this.choseYear--;
      this.setData();
    } else if (!this.isOpenChoseMonth && this.selectedMonth !== "Январь") {
      let index = this.monthData.findIndex(el => el === this.selectedMonth);
      this.selectedMonth = this.monthData[index - 1];
      this.setData();
    } else {
      this.choseYear--;
      this.selectedMonth = "Декабрь";
      this.setData();
    }
  }

  abbreviatedDateDisplay(): string {
    if (this.selectedDay === 0 || this.selectedMonth === '') {
      this.hasText = false;
      return '';
    } else {
      this.hasText = true;
      return this.selectedDay + ' ' + this.selectedMonth;
    }
  }

  setData() {
    console.log({
      "day": this.selectedDay,
      "month": this.selectedMonth,
      "year": this.choseYear
    });
    this.handleClick.emit({
      "day": this.selectedDay,
      "month": this.selectedMonth,
      "year": this.choseYear
    });
  }

  ngOnInit() {
    for (let i = 1; i <= 31; i++) {
      this.dayData.push(i);
    }
  }
}


