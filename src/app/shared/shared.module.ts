import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbButtonsModule, NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    NgbModalModule,
    NgbButtonsModule
  ],
  exports: [
    NgbModalModule,
    NgbButtonsModule
  ]
})
export class SharedModule { }
