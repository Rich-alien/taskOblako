import {
  Component,
  ElementRef,
  HostListener,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'b-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.less']
})
export class SelectorComponent {
  @Input()
  itemList: string[] = [];

  @Input()
  titleSelector: string = '';

  @Input()
  placeholderSelector: string = '';

  @Input()
  isMultiMode: boolean = false;

  @Input()
  isAddControlActive: boolean = false;
  @Input()
  typeList: "data" | "calendarDay" | "calendarMonth" | "timeHour" | "timeMinute" = "data";

  @Output() handleClick: EventEmitter<string[]> = new EventEmitter();

  value = '';

  isNotFound = true;

  monthData = ["янв", "фев", "мар", "апр", "май",
    "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];

  filteredSuggestions: string[] = [];

  isOpened = false;

  selectedItems: string[] = [];

  selectedHint = '';

  isCompleted = true;

  timeData = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];

  private readonly MINIMUM_SEARCH_CHARS: number = 2;

  private readonly IGNORED_NODES: string[] = [
    'svg',
    'path',
    'SPAN',
    'SVG-ICON'
  ];

  @ViewChild('selector') selectorElement!: ElementRef;

  @HostListener('window:click', ['$event'])
  onClick = (event: { target: HTMLElement; }): void => {
    if (this.IGNORED_NODES.includes((event.target as HTMLElement).nodeName)) {
      return;
    }
    const elementSelector = this.searchSelectorElement(event.target);
    if (elementSelector !== this.selectorElement.nativeElement) {
      this.isOpened = false;
    } else {
      this.isOpened = !this.isOpened;
    }
  };
  isNotData(){
    // @ts-ignore
    if(this.typeList !== "data" || this.typeList !== "calendarMouth"){
      return "_time";
    } else {
      return ""
    }
  }
  searchSelectorElement(element: HTMLElement): HTMLElement | null {
    if (element.classList.contains('selector')) {
      return element;
    }
    if (element.parentElement) {
      return this.searchSelectorElement(element.parentElement);
    } else {
      return null;
    }
  }

  filterItems(): string[] {
    if (this.itemList.length !== 0) {
      this.filteredSuggestions = this.itemList;
    } else if (this.typeList === "calendarMonth") {
      this.filteredSuggestions = this.monthData;
    } else if (this.typeList === "calendarDay" && this.filteredSuggestions.length == 0) {
      for (let i = 1; i <= 31; i++) {
        this.filteredSuggestions.push(String(i));
      }
    } else if (this.typeList === "timeHour" && this.filteredSuggestions.length == 0) {
      for (let i = 10; i <= 24; i++) {
        this.filteredSuggestions = this.timeData;
        this.filteredSuggestions.push(String(i));
      }
    } else if (this.typeList === "timeMinute" && this.filteredSuggestions.length == 0) {
      for (let i = 10; i <= 60; i++) {
        this.filteredSuggestions = this.timeData;
        this.filteredSuggestions.push(String(i));
      }
    }
    if (this.value.length < this.MINIMUM_SEARCH_CHARS) {
      return this.filteredSuggestions;
    } else {
      return this.filteredSuggestions.filter(data =>
        data.toLowerCase().includes(this.value.toLowerCase())
      );
    }
  }

  handleChange(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
    if (
      this.value.length > this.MINIMUM_SEARCH_CHARS &&
      this.filteredSuggestions.length
    ) {
      this.filteredSuggestions = this.itemList.filter(data =>
        data.toLowerCase().includes(this.value.toLowerCase())
      );
    } else if (this.filteredSuggestions.length) {
      this.filteredSuggestions = this.itemList;
    }
    this.isNotFound = !!this.filteredSuggestions.length;
  }

  setSelectedItem(item: string): void {
    if (this.isMultiMode) {
      if (this.selectedItems.indexOf(item) != -1) {
        this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
        this.selectedHint = this.selectedItems.toString();
      } else this.selectedItems.push(item);
      this.selectedHint = this.selectedItems.toString();
    } else if (
      !this.isMultiMode &&
      this.selectedItems.length < this.MINIMUM_SEARCH_CHARS
    ) {
      if (this.selectedItems.length === 0) {
        this.selectedItems.push(item);
      } else {
        this.selectedItems[0] = item;
      }
      this.isOpened = false;
      this.selectedHint = item;
    }
    this.handleClick.emit(this.selectedItems);
  }

  addItem(): void {
    this.itemList.push(this.value);
    this.isNotFound = true;
    if (!this.isMultiMode) {
      this.selectedItems = [];
    }
    this.selectedItems.push(this.value);
    this.handleClick.emit(this.selectedItems);
  }

  isItemSelected(item: string): boolean {
    return this.selectedItems.includes(item);
  }
}
