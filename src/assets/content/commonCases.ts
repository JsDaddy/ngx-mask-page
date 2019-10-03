import { FormControl } from '@angular/forms';

// tslint:disable-next-line: no-any
export const ComDocs: any[] = [
    {
        header: 'Date',
        text: '',
<<<<<<< HEAD
        code: `<input matInput mask="00/00/0000"/>`,
=======
        code: `<input mask="00/00/0000">`,
>>>>>>> 65271e836fd930abcbe322f6a1b6ae1222007179
        id: '1',
        anchor: 'prefix'
    },
    {
        header: 'Date and hour',
        text: '',
<<<<<<< HEAD
        code: `<input matInput mask="00/00/00 00:00:00" />`,
=======
        code: `<input mask="00/00/00 00:00:00">`,
>>>>>>> 65271e836fd930abcbe322f6a1b6ae1222007179
        id: '2',
        anchor: 'date'
    },
    {
        header: 'Hour',
        text: '',
<<<<<<< HEAD
        code: `<input matInput mask="00:00:00" />`,
=======
        code: `<input mask="00:00:00">`,
>>>>>>> 65271e836fd930abcbe322f6a1b6ae1222007179
        id: '3',
        anchor: 'hour'
    },
    {
        header: 'Valid 24 hour format',
        text: '',
<<<<<<< HEAD
        code: `<input matInput mask="Hh:m0:s0" />`,
=======
        code: `<input mask="Hh:m0:s0">`,
>>>>>>> 65271e836fd930abcbe322f6a1b6ae1222007179
        id: '4',
        anchor: 'valid24'
    },
    {
        header: 'Mixed types',
        text: '',
<<<<<<< HEAD
        code: `<input matInput mask="AAA 000-S0S" />`,
=======
        code: `<input mask="AAA 000-S0S">`,
>>>>>>> 65271e836fd930abcbe322f6a1b6ae1222007179
        id: '5',
        anchor: 'mixed'
    },
    {
        header: 'Valid date and month',
        text: '',
<<<<<<< HEAD
        code: `<input matInput mask="d0/M0/0000" />`,
=======
        code: `<input mask="d0/M0/0000">`,
>>>>>>> 65271e836fd930abcbe322f6a1b6ae1222007179
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