import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.sass']
})
export class OptionsComponent {

  // public prefixForm: FormControl;
  public suffixForm: FormControl;
  public dropForm: FormControl;
  public showForm: FormControl;
  public clearForm: FormControl;
  public validForm: FormControl;

  public prefixModel: string = '';
  public suffixModel: string = '';
  public dropModel: string = '';
  public showModel: string = '';
  public clearModel: string = '';
  public validModel: string = '';

  // tslint:disable-next-line:no-any
  public control: any = {form: new FormControl(''), model: ''};
  public maska: string = '(00) 000 000';
  public a: boolean = true;

  // tslint:disable-next-line: no-any
  public tiles: any[] = [
    {
      header: 'Prefix (string)',
      text: 'You can add prefix to you masked value',
      code: `<input type='text' prefix="+7 " mask="(000) 000 00 00" >`
    },
    {
      header: 'Suffix (string)',
      text: 'You can add suffix to you masked value',
      code: `<input type='text' suffix=" $" mask="0000" >`
    },
    {
      header: 'dropSpecialCharacters (boolean)',
      text: 'You can choose if mask will drop special character in the model, or not, default value true',
      code: `<input type='text' [dropSpecialCharacters]="false" mask="000-000.00" >`
    },
    {
      header: 'showMaskTyped (boolean)',
      text: 'You can choose if mask is shown while typing, or not, default value false',
      code: ` <input mask="(000) 000-0000" prefix="+7" [showMaskTyped] = "true">`
    },
    {
      header: 'clearIfNotMatch (boolean)',
      text: 'You can choose clear the input if the input value not match the mask, default value false',
      code: `<input type='text' [clearIfNotMatch]="true" mask="000-000.00" >`
    },
    {
      header: 'FormControl validation',
      text: 'You can validate your formControl, default value is true',
      code: ` <input type='text' mask="00 00" [validation]="true">`
    }
  ];

  public constructor() {
    // this.prefixForm = new FormControl('');
    this.suffixForm = new FormControl('');
    this.dropForm = new FormControl('');
    this.showForm = new FormControl('');
    this.clearForm = new FormControl('');
    this.validForm = new FormControl('');
  }
}
