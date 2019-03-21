import { NgModule } from '@angular/core';
import { GetStartedPageComponent } from './get-started-page/get-started-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { MaskComponent } from './mask-component/mask.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'getting-start', component: GetStartedPageComponent },
  { path: 'mask-component', component: MaskComponent}
];
@NgModule({
  declarations: [GetStartedPageComponent, MainPageComponent, MaskComponent],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    CommonModule
  ]
})
export class MainModule { }
