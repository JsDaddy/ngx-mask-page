import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.sass']
})
export class OptionsComponent {
  // tslint:disable
  @Input('docs') public docs: any[];
  @Input('examples') public examples: any[];
  @Input('choose') public choose: string;

  public checkChoose(input: string, curr: string): boolean {
    if (input === curr) {
      setTimeout(() => {
        const anchor = document.getElementById(curr);
        if (anchor) {
          // anchor.focus();
          anchor.scrollIntoView({ behavior: "smooth" });
        }
      });
      return true
    }
    return false
  }


}
