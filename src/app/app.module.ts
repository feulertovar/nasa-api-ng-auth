import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OktaAuthModule } from '@okta/okta-angular';

import { HomeComponent } from './home/home.component';
import { EarthComponent } from './earth/earth.component';
import { MarsComponent } from './mars/mars.component';
import { ExodataComponent } from './exodata/exodata.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarsPod1Component } from './mars/mars-pod1/mars-pod1.component';
import { MarsPod2Component } from './mars/mars-pod2/mars-pod2.component';
import { MarsPod3Component } from './mars/mars-pod3/mars-pod3.component';
import { CarouselComponent } from './carousel/carousel.component';
import { EarthPod1Component } from './earth/earth-pod1/earth-pod1.component';
import { EarthPod2Component } from './earth/earth-pod2/earth-pod2.component';
import { EarthPod3Component } from './earth/earth-pod3/earth-pod3.component';
import { ExodataPod1Component } from './exodata/exodata-pod1/exodata-pod1.component';
import { ExodataPod2Component } from './exodata/exodata-pod2/exodata-pod2.component';
import { ExodataPod3Component } from './exodata/exodata-pod3/exodata-pod3.component';
import { ProfileComponent } from './profile/profile.component';
import { ApodComponent } from './apod/apod.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EarthComponent,
    MarsComponent,
    ExodataComponent,
    ErrorComponent,
    DashboardComponent,
    MarsPod1Component,
    MarsPod2Component,
    MarsPod3Component,
    CarouselComponent,
    EarthPod1Component,
    EarthPod2Component,
    EarthPod3Component,
    ExodataPod1Component,
    ExodataPod2Component,
    ExodataPod3Component,
    ProfileComponent,
    ApodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OktaAuthModule.initAuth({
      issuer: 'https://dev-99298336.okta.com/oauth2/default',
      redirectUri: 'https://nasa-api-viewer.herokuapp.com/implicit/callback',
      clientId: '0oa7bspd2ik44oz2P5d7'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
