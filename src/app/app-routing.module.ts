import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { HomeComponent } from './components/home/home.component';
import { authGuardGuard } from './guard/auth-guard.guard';
import { SimilarityComponent } from './components/similarity/similarity.component';
const routes: Routes = [
  {
    path: "config",
    component: ConfigurationComponent,
    canActivate: [authGuardGuard]
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "similarity",
    component: SimilarityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
