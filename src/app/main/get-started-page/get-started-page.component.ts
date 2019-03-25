import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

// tslint:disable-next-line:interface-name
export interface TableElement {
  position: number;
  mask: string;
  example: string;
}
// const ELEMENT_DATA: TableElement[] = [
//   {
//     position: 1,
//     mask: '9999-99-99',
//     example: '2017-04-15',
//   },
//   {
//     position: 2,
//     mask: '0*.00',
//     example: '2017.22',
//   },
//   {
//     position: 3,
//     mask: '000.000.000-99',
//     example: '048.457.987-98',
//   },
//   {
//     position: 4,
//     mask: 'AAAA',
//     example: '0F6g',
//   },
//   {
//     position: 5,
//     mask: 'SSSS',
//     example: 'asDF',
//   }
// ];
const codePattern: TableElement[] = [
  {
    position: 1,
    mask: '0',
    example: 'digits (like 0 to 9 numbers)',
  },
  {
    position: 2,
    mask: '9',
    example: 'digits (like 0 to 9 numbers), but optional',
  },
  {
    position: 3,
    mask: 'A',
    example: 'letters (uppercase or lowercase) and digits',
  },
  {
    position: 4,
    mask: 'S',
    example: 'only letters (uppercase or lowercase)',
  }
];

@Component({
  selector: 'app-get-started-page',
  templateUrl: './get-started-page.component.html',
  styleUrls: ['./get-started-page.component.scss']
})

export class GetStartedPageComponent implements OnInit {

   public displayedColumns: string[] = ['mask', 'example'];
  //  public dataSource: TableElement[] = ELEMENT_DATA;
   public dataCode:  TableElement[] = codePattern;
   public displayCol: string [] = ['code' , 'meaning'];
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
        header: 'Default patterns'
      },
    ];

    public constructor(
      private _iconRegistry: MatIconRegistry,
      private _sanitizer: DomSanitizer) {}
    public ngOnInit(): void {
      this._iconRegistry.addSvgIcon(
        'chevron-right-solid',
        this._sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/chevron-right-solid.svg'));
      }
}
