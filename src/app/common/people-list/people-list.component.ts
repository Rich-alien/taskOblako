import {Component, OnInit} from '@angular/core';
import {FormService} from "../../services/form.service";

@Component({
  selector: 'b-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.less']
})
export class PeopleListComponent implements OnInit {
  peoples: string[] = [];
  peopleData: string[] = [];

  constructor(private formService: FormService) {
  }

  addPeople(member: string) {
    this.peopleData.push(member);
  }

  getBlueColor(member: string): boolean {
    let booleanValue = false;
    this.peopleData.forEach(people => {
      booleanValue = people === member;
    })
    return booleanValue;
  }

  ngOnInit() {
    this.formService.getAllMembersData().subscribe(members => {
      this.peoples = members as string[];
    })
  }
}
