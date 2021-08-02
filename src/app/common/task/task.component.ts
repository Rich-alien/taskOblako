import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";

@Component({
    selector: 'b-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit {
    // creat dto
    taskData: any;

    idToBeDeleteBlock: string = ''

    progress: number = 0;

    typeOfLessons: number = 0;

    isGroupList: boolean = true;

    showTripletPopup: boolean = false;

    constructor(private taskService: TaskService) {
    }

    switchToGroup(): void {
        this.typeOfLessons = 0;
        this.isGroupList = true;
    }

    switchToIndividual(): void {
        this.typeOfLessons = 1;
        this.isGroupList = false;
    }

    openTripletPopup(id: string): void {
        this.idToBeDeleteBlock = id;
        this.showTripletPopup = !this.showTripletPopup;

    }

    deleteItem() {
        this.taskService.deleteTaskData(this.idToBeDeleteBlock).subscribe(
            () => {
            },
            error => console.log(error));
        this.showTripletPopup = false;
    }

    patchItem() {
        // url to /form with data[id]
        this.showTripletPopup = false;
    }

    ngOnInit() {
        this.taskService.getTaskData().subscribe(data => {
            this.taskData = data;
        });
    }
}
