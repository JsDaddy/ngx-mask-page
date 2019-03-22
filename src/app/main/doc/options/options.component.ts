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

}
