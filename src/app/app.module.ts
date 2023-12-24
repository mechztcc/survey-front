import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { SimpleButtonComponent } from './core/components/simple-button/simple-button.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BadgeComponent } from './core/components/badge/badge.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarComponent,
    SimpleButtonComponent,
    FooterComponent,
    FontAwesomeModule,
    BadgeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
