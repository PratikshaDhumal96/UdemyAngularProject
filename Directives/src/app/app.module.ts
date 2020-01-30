import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeDirectivesComponent } from './practice-directives/practice-directives.component';
import { BasicHighlightDirectiveDirective } from './basic-highlight-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    PracticeDirectivesComponent,
    BasicHighlightDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
