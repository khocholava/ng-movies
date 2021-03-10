import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { LandingStoreState } from './landing-store/landing-store.state';
import { LandingStoreModule } from './landing-store/landing-store.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forFeature([LandingStoreState]),
    LandingStoreModule
  ]
})
export class StoreModule { }
