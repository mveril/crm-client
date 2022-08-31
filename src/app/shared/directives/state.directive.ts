import { Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective {
  @Input() state!: string;
  @HostBinding('class') tdClassName! : String
  constructor() {
    console.log('depuis directive appState')
  }

  ngOnChanges(){
    if (this.state) {
      this.tdClassName =`state-${this.state.toLowerCase()}`
    }
  }
}
