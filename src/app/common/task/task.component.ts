import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";

@Component({
    selector: 'b-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit {

    taskData: any;

    progress: number = 0;

    typeOfLessons: number = 0;

    isGroupList: boolean = true;

    showTripletPopup: boolean = false;

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        this.taskService.getTaskData().subscribe(data => {
            this.taskData = data;
        });
    }

    switchToGroup(): void {
        this.typeOfLessons = 0;
        this.isGroupList = true;
    }

    switchToIndividual(): void {
        this.typeOfLessons = 1;
        this.isGroupList = false;
    }
}
