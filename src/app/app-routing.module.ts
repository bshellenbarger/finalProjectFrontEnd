import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVoiceComponent } from './add-voice/add-voice.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addVoice', component: AddVoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
