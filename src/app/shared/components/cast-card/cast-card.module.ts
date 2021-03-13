import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastCardComponent } from './cast-card.component';



@NgModule({
  declarations: [
    CastCardComponent,
  ],
  exports: [
    CastCardComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class CastCardModule { }
