import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.sass']
})
export class OptionsComponent {
  // tslint:disable
  @Input('docs')
  public docs!: any[];

  @Input('examples')
  public examples!: any[];

  @Input('choose')
  public choose!: string;

  public phone: string = '123456789'
  public customPatterns = { '0': { pattern: new RegExp('\[a-zA-Z\]') } };

  public checkChoose(input: string, curr: string): boolean {
    return input === curr;
  }


}
