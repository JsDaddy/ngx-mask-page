import { NgModule } from '@angular/core';
import { GetStartedPageComponent } from './get-started-page/get-started-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';


const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'getting-start', component: GetStartedPageComponent },
];
@NgModule({
  declarations: [GetStartedPageComponent, MainPageComponent],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
  ]
})
export class MainModule { }
