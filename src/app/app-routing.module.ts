import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyDescComponent } from './company-desc/company-desc.component';
import { JobDescComponent } from './job-desc/job-desc.component';
import { ConclusionAckComponent } from './conclusion-ack/conclusion-ack.component';
import { GoalsComponent } from './goals/goals.component';
import { BonusComponent } from './bonus/bonus.component';
import { TblContentComponent } from './tbl-content/tbl-content.component';

const routes: Routes = [
  { path: 'company-desc', component: CompanyDescComponent },
  { path: 'job-desc', component: JobDescComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'bonus', component: BonusComponent },
  { path: 'conc-ack', component: ConclusionAckComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
