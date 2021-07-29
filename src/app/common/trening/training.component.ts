import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'b-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingComponent {

  @Output() handleClick: EventEmitter<any> = new EventEmitter();

  coachData = [
    "Мария",
    "Дмитрий",
    "Иван",
    "Гоша",
    "Гугл",
    "Яндекс",
  ];
  private date: Object = {};
  private time: Object = {};
  private coach: string[] = [];

  getDate(date: Object) {
    this.date = date;
  }

  getTime(time: Object) {
    this.time = time;
  }

  getCoach(coach: string[]) {
    this.coach = coach;
    this.setTrainingData();
  }

  setDate(): Object {
    return this.date
  }

  setTime(): Object {
    return this.time
  }

  setCoach(): string {
    return this.coach[0];
  }

  setTrainingData() {
    this.handleClick.emit({
      "date": this.setDate(),
      "time": this.setTime(),
      "coach": this.setCoach(),
    });

  }
}
