import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CorporateModule } from "@rail/corporate";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CorporateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
