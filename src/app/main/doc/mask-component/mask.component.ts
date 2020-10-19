import { Component, OnInit } from '@angular/core';
import { OptDocs, OptExamples } from 'src/assets/content/optional';
import { lists } from 'src/assets/content/lists';
import { SepDocs, SepExamples } from 'src/assets/content/separators';
import { ComDocs, ComExamples } from 'src/assets/content/commonCases';
import { OthDocs, OthExamples } from 'src/assets/content/other';

@Component({
    selector: 'app-mask',
    templateUrl: './mask.component.html',
    styleUrls: ['./mask.component.scss']
})
export class MaskComponent implements OnInit {

    // tslint:disable-next-line: no-any
    public inputVal: any;
    public chosenItem!: string ;
    public chosenList!: string;
    // tslint:disable-next-line: no-any
    public lists: any;

    public switchDoc(idList: string): void {
        switch (idList) {
            case '1':
                this.inputVal.docs = ComDocs;
                this.inputVal.examples = ComExamples;
                break;
            case '2':
                this.inputVal.docs = OptDocs;
                this.inputVal.examples = OptExamples;
                break;
            case '3':
                this.inputVal.docs = SepDocs;
                this.inputVal.examples = SepExamples;
                break;
            case '4':
                this.inputVal.docs = OthDocs;
                this.inputVal.examples = OthExamples;
                break;
            default:
                break;
        }
        this.chosenList = idList;
    }

    public handleClick(idItem: string, scrollTo: string): void {
        this.chosenItem = idItem;
        setTimeout(() => {
             // tslint:disable-next-line:no-any
                const anchor: any = document.getElementById(scrollTo);
                if (anchor) {
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'end' });
                }
            });
    }

    public ngOnInit(): void {
        this.inputVal = {
            docs: ComDocs,
            examples: ComExamples
        };
        this.chosenItem = '1';
        this.chosenList = '1';
        this.lists = lists;
    }
}
