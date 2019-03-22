import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-mask',
    templateUrl: './mask.component.html',
    styleUrls: ['./mask.component.scss']
})
export class MaskComponent implements OnInit {
    // tslint:disable-next-line:no-any
    public lists: any[] = [
        {
            header: 'Options',
            text: [
                {
                    content: 'Prefix',
                    id: '1'
                },
                {
                    content: 'Suffix',
                    id: '2'
                },
                {
                    content: 'dropSpecialCharacters',
                    id: '3'
                },
                {
                    content: 'showMaskTyped',
                    id: '4'
                },
                {
                    content: 'clearIfNotMatch',
                    id: '5'
                },
                {
                    content: 'Validation',
                    id: '6'
                },
            ],
        },
    ];

    // tslint:disable-next-line: no-any
    public docs: any[] = [
        {
            header: 'Prefix (string)',
            text: 'You can add prefix to you masked value',
            code: `<input type='text' prefix="+7 " mask="(000) 000 00 00" >`,
            id: '1'
        },
        {
            header: 'Suffix (string)',
            text: 'You can add suffix to you masked value',
            code: `<input type='text' suffix=" $" mask="0000" >`,
            id: '2'
        },
        {
            header: 'dropSpecialCharacters (boolean)',
            text: 'You can choose if mask will drop special character in the model, or not, default value true',
            code: `<input type='text' [dropSpecialCharacters]="false" mask="000-000.00" >`,
            id: '3'
        },
        {
            header: 'showMaskTyped (boolean)',
            text: 'You can choose if mask is shown while typing, or not, default value false',
            code: ` <input mask="(000) 000-0000" prefix="+7" [showMaskTyped] = "true">`,
            id: '4'
        },
        {
            header: 'clearIfNotMatch (boolean)',
            text: 'You can choose clear the input if the input value not match the mask, default value false',
            code: `<input type='text' [clearIfNotMatch]="true" mask="000-000.00" >`,
            id: '5'
        },
        {
            header: 'FormControl validation',
            text: 'You can validate your formControl, default value is true',
            code: ` <input type='text' mask="00 00" [validation]="true">`,
            id: '6'
        }
    ];

    // tslint:disable-next-line: no-any
    public examples: any[] = [
        {
            _placeholder: 'prefix',
            _prefix: '+75',
            _mask: '(00) 000 000',
            control: { form: new FormControl(''), model: '' }
        },
        {
            _placeholder: 'suffix',
            _suffix: ' $',
            _mask: '0 000',
            control: { form: new FormControl(''), model: '' }
        },
        {
            _placeholder: 'dropSpecialCharacters',
            _dropSpecialCharacters: false,
            _mask: '000-000.00',
            control: { form: new FormControl(''), model: '' }
        },
        {
            _placeholder: 'showMaskTyped',
            _showMaskTyped: true,
            _mask: '(000) 000-0000',
            control: { form: new FormControl(''), model: '' }
        },
        {
            _placeholder: 'clearIfNotMatch',
            _clearIfNotMatch: true,
            _mask: '000-000.00',
            control: { form: new FormControl(''), model: '' }
        },
        {
            _placeholder: 'validation',
            _validation: true,
            _mask: '000-000.00',
            control: { form: new FormControl(''), model: '' }
        },
    ];

    // tslint:disable-next-line: no-any
    public inputVal: any;
    public chosenItem: string;
    // tslint:disable-next-line: no-any
    public switchDoc(): void {
        this.inputVal.docs = this.docs;
        this.inputVal.examples = this.examples;
    }

    public handleClick(id: string): void {
        this.chosenItem = id;
    }

    public ngOnInit(): void {
        this.inputVal = {
            docs: [],
            examples: []
        };
        this.chosenItem = '';
    }
}
