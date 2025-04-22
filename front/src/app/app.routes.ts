// src/app/app.routes.ts
import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CompetenceListComponent } from './components/competence/competence-list/competence-list.component';
import { CompetenceFormComponent } from './components/competence/competence-form/competence-form.component';
import { CompetenceDetailComponent } from './components/competence/competence-detail/competence-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'competences', component: CompetenceListComponent },
  { path: 'competences/new', component: CompetenceFormComponent },
  { path: 'competences/edit/:id', component: CompetenceFormComponent },
  { path: 'competences/:id', component: CompetenceDetailComponent },
  { path: '**', redirectTo: '' }
];
