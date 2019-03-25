import { FormControl } from '@angular/forms';

// tslint:disable-next-line: no-any
export const OthDocs: any[] = [
    {
        header: 'Secure input',
        text: 'You can hide symbols in input field and get the actual value in formcontrol',
        code: ` <input [hiddenInput]="true" mask="XXX/X0/0000">`,
        id: '1'
    },
    {
        header: 'Pipe',
        text: 'Also you can use mask pipe',
        code: ` <span>{{phone | mask: '(000) 000-0000'}}</span>`,
        id: '2'
    },
    {
        header: 'specialCharacters',
        text: '',
        code: ` <input type='text' [specialCharacters]="[ '[' ,']' , '\\' ]" mask="[00]\[000]" >`,
        id: '3'
    },
];


// tslint:disable-next-line: no-any
export const OthExamples: any[] = [
    {
        _placeholder: 'Secure input',
        _hiddenInput: true,
        _mask: 'XXX/X0/0000',
        control: { form: new FormControl(''), model: '' }
    },
    {
        _pipe: '(000) 000-0000',
    },
    {
        _placeholder: 'specialCharacters',
        _specialCharacters: `[ '[' ,']' , '\\' ]`,
        _mask: '[00]\[000]',
        control: { form: new FormControl(''), model: '' }
    },
];