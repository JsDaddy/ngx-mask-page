import { Component } from '@angular/core';

@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss']
})
export class MaskComponent {
    // tslint:disable-next-line:no-any
    public lists: any [] = [
        {
            header: 'Options',
            text: [
                {
                    content: 'item1',
                },
                {
                    content: 'item2'
                }
            ],
        },
    ];
}
