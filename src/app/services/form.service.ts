import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private name: string[] = [];
  training: Object[] = [];
  private members: string[] = [];

  constructor(
    private http: HttpClient
  ) {
    this.training = new Array(3);
  }

  getAllMembersData() {
    return this.http.get(' http://localhost:3000/members');
  }

  getEventName(name: string[]) {
    this.name = name;
  }

  setEventName(): string {
    return this.name[0];
  }

  getTraining(training: Object, id: number) {
    this.training[id] = training;
  }

  setTraining(): Object[] {
    return this.training;
  }

  getMembers(members: string[]) {
    this.members = members;
  }

  setMembers(): string[] {
    return this.members;
  }

  setObjectTask(): Object {
    let task;
    task = {
      name: this.setEventName(),
      training: this.setTraining(),
      members: this.setMembers()
    }
    return task;
  }
}
