import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'b-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  value: string = ''

  changeValue(value: any) {
    this.value = value.target.value;

  }
}
