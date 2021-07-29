import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(
    private http: HttpClient
  ) {
  }

  getTaskData() {
    return this.http.get(' http://localhost:3000/task');
  }

  postTaskData(body: any) {
    return this.http.post(' http://localhost:3000/task', body);
  }
}
