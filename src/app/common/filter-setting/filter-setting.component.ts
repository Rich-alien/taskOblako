import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'b-filter-setting',
  templateUrl: './filter-setting.component.html',
  styleUrls: ['./filter-setting.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterSettingComponent {
  @Input()
  count: number = 0;

  @Input()
  label: string = ' сессии';
}
