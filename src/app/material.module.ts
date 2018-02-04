import { NgModule } from '@angular/core';
import {MatButtonModule, 
    MatCheckboxModule, 
    MatCardModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule],
})
export class MaterialModule { }