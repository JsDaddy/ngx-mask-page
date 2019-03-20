import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
=======
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
>>>>>>> b66bf42d93d1919c216cc1abf3259d8b9bd375d0

@NgModule({
  imports: [
    MatIconModule,
<<<<<<< HEAD
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
=======
    MatToolbarModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule
>>>>>>> b66bf42d93d1919c216cc1abf3259d8b9bd375d0
  ]
})
export class MaterialModule { }
