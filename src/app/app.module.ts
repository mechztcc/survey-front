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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpHandlerInterceptor } from './core/interceptors/http-handler.interceptor';
import { AlertRenderComponent } from './core/components/alert-render/alert-render.component';
import { StoreModule } from '@ngrx/store';
import { searchReducer } from './modules/home/shared/stores/search.reducer';

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
    HttpClientModule,
    AlertRenderComponent,
    StoreModule.forRoot({ search: searchReducer }, {}),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHandlerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
