import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'b-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit {
  @Input()
  icon: 'progress' | 'default' | 'tick' | 'minus' | 'cross' = 'default';

  iconPath = '';

  taskData: any;

  progress: number = 0;

  typeOfLessons: number = 0;

  isGroupList: boolean = true;

  constructor(private taskService: TaskService) {

  }

  ngOnInit() {
    this.taskService.getTaskData().subscribe(data=> {
      this.taskData = data;
    });
  }
  switchToGroup(): void{
    this.typeOfLessons = 0;
    this.isGroupList = true;
  }
  switchToIndividual(): void{
    this.typeOfLessons = 1;
    this.isGroupList = false;
  }
  private setButtonIcon(): void {
    switch (this.icon) {
      case 'progress' :
        this.iconPath = 'assets/icons/progress.svg';
        break;
      case 'cross' :
        this.iconPath = 'assets/icons/cross.svg';
        break;
      case 'minus' :
        this.iconPath = 'assets/icons/minus.svg';
        break;
      case 'tick' :
        this.iconPath = 'assets/icons/tick.svg';
        break;
      default:
        this.iconPath = ''
        break;
    }
  }
}
