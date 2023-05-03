import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirecive {
    @HostBinding('class.show') isShow = false;

    @HostListener('click') toggleShow(){
        this.isShow = !this.isShow;
    }
}