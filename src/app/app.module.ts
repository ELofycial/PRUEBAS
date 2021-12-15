import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { PagenotfoundComponent } from './error/pagenotfound/pagenotfound.component';
import { ObjToAwwayPipe } from './pipes/obj-to-awway.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    ObjToAwwayPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
