import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'b-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input()
  hasIcon: boolean = false;

  @Input()
  hasBorder: boolean = false;

  @Input()
  isBlue: boolean = false;

  @Input()
  text: string = '';

  @Input()
  isDisabled: boolean = false;
}
