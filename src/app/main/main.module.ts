import { OptionsComponent } from './doc/options/options.component';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { HighlightModule } from 'ngx-highlightjs';
import { NgxMaskModule } from 'ngx-mask';
import { MaskComponent } from './doc/mask-component/mask.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetStartedPageComponent } from './get-started-page/get-started-page.component';
import { HttpClientModule } from '@angular/common/http';

import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';


const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'mask-component', component: MaskComponent },
  { path: 'getting-start', component: GetStartedPageComponent}
];


// tslint:disable-next-line: no-any
function hljsLanguages(): any {
  return [
    { name: 'typescript', func: typescript },
    { name: 'xml', func: xml }
  ];
}
@NgModule({
  declarations: [MainPageComponent, GetStartedPageComponent, MaskComponent, OptionsComponent],
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
    HttpClientModule
  ]
})
export class MainModule { }
