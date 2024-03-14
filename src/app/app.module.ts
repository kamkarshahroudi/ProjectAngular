import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DxDataGridModule } from 'devextreme-angular';
import { DxButtonModule, DxSortableModule, DxTabPanelModule, DxListModule, DxTemplateModule} from 'devextreme-angular';
import {
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
  DxValidatorModule,
  DxFormModule,
  DxFormComponent,
  DxTextBoxModule, DxTextAreaModule,
  DxDateBoxModule,DxValidationSummaryModule,
  DxAutocompleteModule,

} from 'devextreme-angular';
import { DxPopupModule } from 'devextreme-angular/ui/popup';

@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    DxButtonModule, DxSortableModule,
    DxTabPanelModule, 
    DxListModule,
    DxTemplateModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxValidatorModule,
    DxFormModule,
  

  DxTextBoxModule, DxTextAreaModule,
  DxDateBoxModule,DxValidationSummaryModule,
  DxPopupModule,
  DxAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
