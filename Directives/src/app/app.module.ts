import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeDirectivesComponent } from './practice-directives/practice-directives.component';
import { BasicHighlightDirectiveDirective } from './basic-highlight/basic-highlight-directive.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { Inless2Directive } from './inless2.directive';

@NgModule({
  declarations: [
    AppComponent,
    PracticeDirectivesComponent,
    BasicHighlightDirectiveDirective,
    BetterHighlightDirective,
    UnlessDirective,
    Inless2Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
