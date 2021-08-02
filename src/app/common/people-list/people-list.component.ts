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

  active(people: string) {
    return this.peopleData.includes(people, 0);
  }

  addPeople(member: string) {
    this.peopleData.push(member);
    this.handleClick.emit(this.peopleData)
  }


}
