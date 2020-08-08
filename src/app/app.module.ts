import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { WorkTermReportComponent } from './work-term-report/work-term-report.component';
import { CompanyDescComponent } from './company-desc/company-desc.component';
import { JobDescComponent } from './job-desc/job-desc.component';
import { ModalComponent } from './modal/modal.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { ConclusionAckComponent } from './conclusion-ack/conclusion-ack.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkTermReportComponent,
    CompanyDescComponent,
    JobDescComponent,
    ModalComponent,
    ConclusionComponent,
    ConclusionAckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
