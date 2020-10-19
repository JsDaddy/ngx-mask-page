import { OptionsComponent } from './doc/options/options.component';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { NgxMaskModule } from 'ngx-mask';
import { MaskComponent } from './doc/mask-component/mask.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetStartedPageComponent } from './get-started-page/get-started-page.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: 'main', component: MaskComponent},
  {path: 'mask-component', component: MaskComponent},
  {path: 'getting-start', component: GetStartedPageComponent}
];

@NgModule({
  declarations: [MainPageComponent, GetStartedPageComponent, MaskComponent, OptionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    HighlightModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
})
export class MainModule {
}
