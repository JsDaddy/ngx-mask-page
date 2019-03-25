import { FormControl } from '@angular/forms';

// tslint:disable-next-line: no-any
export const SepDocs: any[] = [
    {
        header: 'Thousand separator',
        text: 'You can devide your input by thousands',
        code: `<input type='text' mask="separator">`,
        id: '1',
        anchor: 'sep'
    },
    {
        header: 'Dot separator',
        text: 'For separate input with dots',
        code: `<input type='text' mask="dot_separator">`,
        id: '2',
        anchor: 'Dsep'

    },
    {
        header: 'Dot separator',
        text: `For limiting decimal precision add ',' and the precision you want to limit too on the input. 2 is useful for currency. 0 will prevent decimals completely.`,
        code: `<input type='text' mask="dot_separator.2">`,
        id: '2'
    },
    {
        header: 'Dot separator',
        text: 'without decimal part',
        code: `<input type='text' mask="dot_separator.0">`,
        id: '2'
    },
    {
        header: 'Comma separator',
        text: `For separate input with commas`,
        code: `  <input type='text' mask="comma_separator">`,
        id: '3',
        anchor: 'comma_sep'
    },
    {
        header: 'Comma separator',
        text: `For limiting decimal precision add '.' and the precision you want to limit too on the input. 2 is useful for currency. 0 will prevent decimals completely.`,
        code: `  <input type='text' mask="comma_separator.2">`,
        id: '3'
    },
    {
        header: 'Comma separator',
        text: 'without decimal part',
        code: `<input type='text' mask="comma_separator.0">`,
        id: '3'
    },
];


// tslint:disable-next-line: no-any
export const SepExamples: any[] = [
    {
        _placeholder: 'Separator',
        _mask: 'separator',
        control: { form: new FormControl(''), model: '' }
    },
    {
        _placeholder: 'dot_separator',
        _mask: 'dot_separator',
        control: { form: new FormControl(''), model: '' }
    },
    {
        _placeholder: 'dot_separator.2',
        _mask: 'dot_separator.2',
        control: { form: new FormControl(''), model: '' }
    },
    {
        _placeholder: 'dot_separator.0',
        _mask: 'dot_separator.2',
        control: { form: new FormControl(''), model: '' }
    },
    {
        _placeholder: 'comma_separator',
        _mask: 'comma_separator',
        control: { form: new FormControl(''), model: '' }
    },
    {
        _placeholder: 'comma_separator.2',
        _clearIfNotMatch: true,
        _mask: 'comma_separator.2',
        control: { form: new FormControl(''), model: '' }
    },
    {
        _placeholder: 'comma_separator.0',
        _mask: 'comma_separator.0',
        control: { form: new FormControl(''), model: '' }
    },
];