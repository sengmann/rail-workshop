import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CorporateModule } from "@rail/corporate";
import { TrainsModule } from "@rail/trains";
import { AdminModule } from "@rail/admin";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CorporateModule, TrainsModule, AdminModule, RouterModule.forRoot([{path: '**', redirectTo: '/train'}])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
