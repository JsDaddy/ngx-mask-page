import { FormControl } from '@angular/forms';

// tslint:disable-next-line: no-any
export const ComDocs: any[] = [
    {
        header: 'Date',
        text: '',
        code: `<input type='text' prefix="+7 " mask="(000) 000 00 00" >`,
        id: '1',
        anchor: 'prefix'
    },
    {
        header: 'Date and hour',
        text: '',
        code: `<input type='text' suffix=" $" mask="0000" >`,
        id: '2',
        anchor: 'date'
    },
    {
        header: 'Hour',
        text: '',
        code: `<input type='text' [dropSpecialCharacters]="false" mask="000-000.00" >`,
        id: '3',
        anchor: 'hour'
    },
    {
        header: 'Valid 24 hour format',
        text: '',
        code: ` <input mask="(000) 000-0000" prefix="+7" [showMaskTyped] = "true">`,
        id: '4',
        anchor: 'valid24'
    },
    {
        header: 'Mixed types',
        text: '',
        code: `<input type='text' [clearIfNotMatch]="true" mask="000-000.00" >`,
        id: '5',
        anchor: 'mixed'
    },
    {
        header: 'Valid date and month',
        text: '',
        code: ` <input type='text' mask="00 00" [validation]="true">`,
        id: '6',
        anchor: 'validdate'
    }
];


// tslint:disable-next-line: no-any
export const ComExamples: any[] = [
    {
        _placeholder: 'Date',
        _mask: '00/00/0000',
        control: { form: new FormControl(''), model: '' }
    },
    {
        _placeholder: 'Date and Hour',
        _mask: '00/00/00 00:00:00',
        control: { form: new FormControl(''), model: '' }
    },
    {
        _placeholder: 'Hour',
        _mask: '00:00:00',
        control: { form: new FormControl(''), model: '' }
    },
    {
        _placeholder: 'Valid 24 hour format',
        _mask: 'Hh:m0:s0',
        control: { form: new FormControl(''), model: '' }
    },
    {
        _placeholder: 'Mixed Type',
        _mask: 'AAA 000-S0S',
        control: { form: new FormControl(''), model: '' }
    },
    {
        _placeholder: 'Valid date and month',
        _mask: 'd0/M0/0000',
        control: { form: new FormControl(''), model: '' }
    },
];