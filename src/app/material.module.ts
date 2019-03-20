import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
