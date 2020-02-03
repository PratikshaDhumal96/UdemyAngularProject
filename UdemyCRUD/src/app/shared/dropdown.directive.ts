import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }
  @HostBinding('class.open')isOpen = false;

  @HostListener('click') openToggle( ) {
    this.isOpen = !this.isOpen;
  }



}
