import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MultilevelmenuComponent } from './multilevelmenu/multilevelmenu.component';
import { HeaderComponent } from './smallconm/header/header.component';
import { MaincontentComponent } from './smallconm/maincontent/maincontent.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { AppVisionComponent } from './app-vision/app-vision.component';
import { StoriesComponent } from './stories/stories.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { ModalController } from '@ionic/angular';
import { PopupComponent } from './popup/popup.component';
import { AddNewComponent } from './add-new/add-new.component';
import { DotedPopupComponent } from './doted-popup/doted-popup.component';
import { DocumentsComponent } from './all-popupsFolder/documents/documents.component';
import { TagsComponent } from './all-popupsFolder/tags/tags.component';
import { FolderPopComponent } from './all-popupsFolder/folder-pop/folder-pop.component';
import { LinkedItemsComponent } from './all-popupsFolder/linked-items/linked-items.component';
import { PeopleComponent } from './all-popupsFolder/people/people.component';
import { AddnewpopupComponent } from './addnewpopup/addnewpopup.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SideNavComponent,
    LayoutComponent,
    DashboardComponent,
    HomepageComponent,
    MultilevelmenuComponent,
    HeaderComponent,
    MaincontentComponent,
    LandingPageComponent,
    FooterComponent,
    AppVisionComponent,
    StoriesComponent,
    UserInterfaceComponent,
    PopupComponent,
    DotedPopupComponent,
    AddNewComponent,
    DocumentsComponent,
    TagsComponent,
    FolderPopComponent,
    LinkedItemsComponent,
    PeopleComponent,
    AddnewpopupComponent

  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
