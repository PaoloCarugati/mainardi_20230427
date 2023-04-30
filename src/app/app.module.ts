import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AnimalsComponent, AnimaleComponent } from './animale/animale.component';
import { AnimaliComponent } from './animale/animale.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimaliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
