import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PhonebookSharedModule } from 'app/shared/shared.module';
import { PhonebookCoreModule } from 'app/core/core.module';
import { PhonebookAppRoutingModule } from './app-routing.module';
import { PhonebookHomeModule } from './home/home.module';
import { PhonebookEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PhonebookSharedModule,
    PhonebookCoreModule,
    PhonebookHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PhonebookEntityModule,
    PhonebookAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class PhonebookAppModule {}
