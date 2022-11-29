import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { EarthComponent } from './earth/earth.component';
import { MarsComponent } from './mars/mars.component';
import { ExodataComponent } from './exodata/exodata.component';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { ProfileComponent } from './profile/profile.component';
import { ApodComponent } from './apod/apod.component';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent, runGuardsAndResolvers: 'always'},

{ path: 'apod', component: ApodComponent, runGuardsAndResolvers: 'always'},

{ path: 'earth', component : EarthComponent, runGuardsAndResolvers: 'always'},

{ path: 'mars', component : MarsComponent, runGuardsAndResolvers: 'always'},

{ path: 'exodata', component : ExodataComponent, runGuardsAndResolvers: 'always'},
{
  path: 'profile', component: ProfileComponent, runGuardsAndResolvers: 'always'},
{
  path: 'implicit/callback',
  component: OktaCallbackComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
