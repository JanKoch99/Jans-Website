import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LeukemiaComponent } from './leukemia/leukemia.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LeukemiaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
