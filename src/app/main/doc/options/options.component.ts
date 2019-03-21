import { Component } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.sass']
})
export class OptionsComponent {

  public color: string = 'primary';

  // tslint:disable-next-line: no-any
  public tiles: any[] = [
    {
      header: 'Prefix (string)',
      text: 'You can add prefix to you masked value',
      code: `<input type='text' prefix="+7 " mask="(000) 000 00 00" >`
    },
    {
      header: 'Sufix (string)',
      text: 'You can add sufix to you masked value',
      code: `<input type='text' sufix=" $" mask="0000" >`
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
}
