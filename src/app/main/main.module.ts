import { NgModule } from '@angular/core';
import { GetStartedPageComponent } from './get-started-page/get-started-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { OptionsComponent } from './doc/options/options.component';
import { HighlightModule } from 'ngx-highlightjs';
import {NgxMaskModule} from 'ngx-mask'

import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'main', component: OptionsComponent },
  { path: 'getting-start', component: GetStartedPageComponent },
];


// tslint:disable-next-line: no-any
function hljsLanguages(): any {
  return [
    { name: 'typescript', func: typescript },
    { name: 'xml', func: xml }
  ];
}
@NgModule({
  declarations: [GetStartedPageComponent, MainPageComponent, OptionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
