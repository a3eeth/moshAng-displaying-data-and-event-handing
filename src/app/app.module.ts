import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { AttributebindingComponent } from './attributebinding/attributebinding.component';
import { AddingbootstrapComponent } from './addingbootstrap/addingbootstrap.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { EventfilteringComponent } from './eventfiltering/eventfiltering.component';
import { TemplatevariablesComponent } from './templatevariables/templatevariables.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    PropertybindingComponent,
    AttributebindingComponent,
    AddingbootstrapComponent,
    ClassbindingComponent,
    StylebindingComponent,
    EventbindingComponent,
    EventfilteringComponent,
    TemplatevariablesComponent,
    TwowaybindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
