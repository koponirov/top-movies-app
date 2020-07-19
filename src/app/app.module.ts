import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import zh from '@angular/common/locales/zh';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
