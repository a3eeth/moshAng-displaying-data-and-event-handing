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
import { PipesComponent } from './pipes/pipes.component';
import { CustompipesComponent } from './custompipes/custompipes.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { CapitalizerPipe } from './capitalizer.pipe';

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
    TwowaybindingComponent,
    PipesComponent,
    CustompipesComponent,
    SummaryPipe,
    FavoriteComponent,
    TitlecaseComponent,
    CapitalizerPipe
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
