import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TableLightComponent,
    TotalPipe,
    StateDirective,
    BtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    TemplatesModule,
    IconsModule,
    TableLightComponent,
    BtnComponent,
    TotalPipe,
    StateDirective
  ]
})
export class SharedModule { }
