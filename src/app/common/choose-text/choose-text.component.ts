import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'b-choose-text',
  templateUrl: './choose-text.component.html',
  styleUrls: ['./choose-text.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChooseTextComponent {

  @Input()
  hasIconCircle: boolean = false;

  @Input()
  hasIconBlock: boolean = false;

  @Input()
  hisActive: boolean = false;

  @Input()
  text: string = '';

  @Input()
  isDisabled: boolean = false;


  @Output() handleClick: EventEmitter<string> = new EventEmitter();

  saveValue(value: string): void {
    this.handleClick.emit(value);
  }
}
