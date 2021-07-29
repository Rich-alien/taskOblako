import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'b-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ]
})
export class InputFieldComponent {
  @Input()
  label: string = '';
  @Input()
  placeholder: string = '';
  input: FormControl = new FormControl();

  @Input()
  isDisabled: boolean = false;

  onChange: ((arg0: string) => void) | undefined;

  onTouched = () => {
    //
  };

  writeValue(value: string): void {
    this.input.setValue(value);
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  ngOnInit(): void {
    if (this.isDisabled) {
      this.input.disable();
    }
    this.input.valueChanges.subscribe((value: string) => {
      if (this.onChange) {
        this.onChange(value);
      }
    });
  }
}
