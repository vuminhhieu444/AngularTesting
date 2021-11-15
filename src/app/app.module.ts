import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './baiTh2/bai1/main/main.component';
import { FooterComponent } from './baiTh2/bai1/footer/footer.component';
import { HeaderComponent } from './baiTh2/bai1/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    // BaiTh2Component,
    // Bai1Component,
    MainComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
