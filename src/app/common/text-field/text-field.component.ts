import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'b-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextFieldComponent {
  @Input()
  hasUnderLine: boolean = false;
  @Input()
  text: string = '';
}
