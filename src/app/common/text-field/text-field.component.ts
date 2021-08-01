import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'b-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextFieldComponent implements OnInit {
  @Input()
  hasUnderLine: boolean = false;

  @Input()
  isOpened: boolean = false;

  @Input()
  text: string = '';

  @Input()
  hasCross: boolean = false;

  @Input()
  label: string = '';

  @Input()
  nameIcon = '';

  srcIcon: string = '';

  hasIcon: boolean = true;

  deleteText(){
    this.text = '';
  }

  ngOnInit() {
    switch (this.nameIcon) {
      case 'calendar':
        this.srcIcon = 'assets/icons/calendar.svg'
        break;
      case 'clock':
        this.srcIcon = 'assets/icons/clock.svg'
        break;
      default:
        this.hasIcon = false
        break
    }
  }
}
