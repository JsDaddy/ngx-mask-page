import { Component, OnInit } from '@angular/core';
import { OptDocs, OptExamples } from 'src/assets/content/optional';
import { lists } from 'src/assets/content/lists';
import { SepDocs, SepExamples } from 'src/assets/content/separators';

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
                break;
            case '2':
                this.inputVal.docs = SepDocs;
                this.inputVal.examples = SepExamples;
                break;
            default:
                break;
        }
        this.chosenList = idList;
    }

    public handleClick(idItem: string, idList: string): void {
        this.chosenItem = idItem;
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
