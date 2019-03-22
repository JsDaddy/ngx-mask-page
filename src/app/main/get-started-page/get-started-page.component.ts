import { Component } from '@angular/core';

// tslint:disable-next-line:interface-name
export interface TableElement {
  mask: string;
  example: string;
}
const ELEMENT_DATA: TableElement[] = [
  {
    mask: '9999-99-99',
    example: '2017-04-15'
  },
  {
    mask: '0*.00',
    example: '	2017.22'
  },
  {
    mask: '000.000.000-99',
    example: '048.457.987-98'
  },
  {
    mask: 'AAAA',
    example: '	0F6g'
  },
  {
    mask: 'SSSS',
    example: 'asDF'
  }
];


@Component({
  selector: 'app-get-started-page',
  templateUrl: './get-started-page.component.html',
  styleUrls: ['./get-started-page.component.scss']
})

export class GetStartedPageComponent {
   public displayedColumns: string[] = ['mask', 'example'];
   public dataSource: TableElement[] = ELEMENT_DATA;
    // tslint:disable-next-line:no-any
    public quickStart: any [] = [
      {
          header: 'Installing',
          code: `npm install --save ngx-mask`
      },
      {
        header: 'Quickstart',
        text: 'Import ngx-mask module in Angular app.',
        code: `import {NgxMaskModule} from 'ngx-mask'

        (...)
        @NgModule({
          (...)
          imports: [
            NgxMaskModule.forRoot(options)
          ]
          (...)
        })`
      },
      {
        text: 'Then, just define masks in inputs.'
      },
      {
        header: 'Usage',
        code: `<input type='text' mask='{here comes your mask}' >`
      },
      {
        text: 'Also you can use mask pipe'
      },
      {
        header: 'Usage',
        code: `<span>{{phone | mask: '(000) 000-0000'}}</span>`
      },
      {
        header: 'Examples'
      }
    ];
}
