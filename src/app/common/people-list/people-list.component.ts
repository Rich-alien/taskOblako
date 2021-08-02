import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'b-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.less']
})
export class PeopleListComponent {
  @Input()
  peoples: string[] = [];

  @Output() handleClick: EventEmitter<string[]> = new EventEmitter();

  peopleData: string[] = [];
  hisActive: boolean = false;

  chooseAllPeople(): void {
    if (!(this.peopleData.length === this.peoples.length)) {
      this.peopleData = this.peoples;
    } else {
      this.peopleData = [];
    }
    this.hisActive = !this.hisActive
  }

  active(people: string): boolean {
    return this.peopleData.includes(people, 0);
  }

  addPeople(member: string) {
    this.peopleData.push(member);
    this.handleClick.emit(this.peopleData)
  }


}
