import {Component, Input} from '@angular/core';

@Component({
  selector: 'b-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.less']
})
export class PeopleListComponent {
  @Input()
  peoples: string[] = [];

  peopleData: string[] = [];


  addPeople(member: string) {
    this.peopleData.push(member);
  }

  getBlueColor(member: string): boolean {
    return this.peopleData.includes(member, 0);
  }

}
