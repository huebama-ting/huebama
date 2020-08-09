import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { WorkTermReportComponent } from './work-term-report/work-term-report.component';
import { CompanyDescComponent } from './company-desc/company-desc.component';
import { JobDescComponent } from './job-desc/job-desc.component';
import { WtsModalComponent } from './wts-modal/wts-modal.component';
import { ConclusionAckComponent } from './conclusion-ack/conclusion-ack.component';
import { GoalsComponent } from './goals/goals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkTermReportComponent,
    CompanyDescComponent,
    JobDescComponent,
    WtsModalComponent,
    ConclusionAckComponent,
    GoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
