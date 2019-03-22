import { Component, OnInit } from '@angular/core';
import { OptDocs, OptExamples } from 'src/assets/content/optional';
import { lists } from 'src/assets/content/lists';

@Component({
    selector: 'app-mask',
    templateUrl: './mask.component.html',
    styleUrls: ['./mask.component.scss']
})
export class MaskComponent implements OnInit {

    // tslint:disable-next-line: no-any
    public inputVal: any;
    public chosenItem: string;
    public chosenList: string;
    // tslint:disable-next-line: no-any
    public lists: any;

    public switchDoc(idList: string): void {
        switch (idList) {
            case '1':
                this.inputVal.docs = OptDocs;
                this.inputVal.examples = OptExamples;
            default:
                break;
        }
        this.chosenList = idList;
    }

    public handleClick(idItem: string, scrollTo: string): void {
        this.chosenItem = idItem;
        if (Number(idItem) > 3) {
            setTimeout(() => {
                // tslint:disable-next-line:no-any
                const anchor: any = document.getElementById(scrollTo);
                if (anchor) {
                    // anchor.focus();
                    anchor.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

    }

    public ngOnInit(): void {
        this.inputVal = {
            docs: [],
            examples: []
        };
        this.chosenItem = '';
        this.lists = lists;
    }
}
