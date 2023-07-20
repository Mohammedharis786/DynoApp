import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './common/products/products.component';
import { PartsComponent } from './common/parts/parts.component';
import { ResourcesComponent } from './common/resources/resources.component';
import { SettingsComponent } from './common/settings/settings.component';
import { MultilevelmenuComponent } from './multilevelmenu/multilevelmenu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppVisionComponent } from './app-vision/app-vision.component';
const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'loginForm', component: LoginFormComponent },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dash',
        pathMatch: 'full',
      },
      { path: 'dash', component: DashboardComponent },
      { path: 'product', component: ProductsComponent },
      { path: 'part', component: PartsComponent },
      { path: 'resource', component: ResourcesComponent },
      { path: 'setting', component: SettingsComponent },
      { path: 'landing', component: LandingPageComponent },
      {path: 'multi',component:MultilevelmenuComponent},
    {path:'vision',component:AppVisionComponent}
      
    ]
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
