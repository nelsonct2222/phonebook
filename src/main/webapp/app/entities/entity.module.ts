import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'person',
        loadChildren: () => import('./person/person.module').then(m => m.PhonebookPersonModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class PhonebookEntityModule {}
