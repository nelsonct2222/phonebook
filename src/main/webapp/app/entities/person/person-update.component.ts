import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IPerson, Person } from 'app/shared/model/person.model';
import { PersonService } from './person.service';

@Component({
  selector: 'jhi-person-update',
  templateUrl: './person-update.component.html'
})
export class PersonUpdateComponent implements OnInit {
  isSaving = false;
  dobDp: any;

  editForm = this.fb.group({
    id: [],
    firstName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
    lastName: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
    middleName: [null, [Validators.maxLength(200)]],
    phone: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(20), Validators.pattern('^[0-9+\\-]+$')]],
    company: [],
    dob: [null, [Validators.required]],
    addressLine1: [null, [Validators.maxLength(200)]],
    addressLine2: [null, [Validators.maxLength(200)]],
    city: [null, [Validators.required]],
    postalCode: [],
    country: [null, [Validators.required]]
  });

  constructor(protected personService: PersonService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ person }) => {
      this.updateForm(person);
    });
  }

  updateForm(person: IPerson): void {
    this.editForm.patchValue({
      id: person.id,
      firstName: person.firstName,
      lastName: person.lastName,
      middleName: person.middleName,
      phone: person.phone,
      company: person.company,
      dob: person.dob,
      addressLine1: person.addressLine1,
      addressLine2: person.addressLine2,
      city: person.city,
      postalCode: person.postalCode,
      country: person.country
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const person = this.createFromForm();
    if (person.id !== undefined) {
      this.subscribeToSaveResponse(this.personService.update(person));
    } else {
      this.subscribeToSaveResponse(this.personService.create(person));
    }
  }

  private createFromForm(): IPerson {
    return {
      ...new Person(),
      id: this.editForm.get(['id'])!.value,
      firstName: this.editForm.get(['firstName'])!.value,
      lastName: this.editForm.get(['lastName'])!.value,
      middleName: this.editForm.get(['middleName'])!.value,
      phone: this.editForm.get(['phone'])!.value,
      company: this.editForm.get(['company'])!.value,
      dob: this.editForm.get(['dob'])!.value,
      addressLine1: this.editForm.get(['addressLine1'])!.value,
      addressLine2: this.editForm.get(['addressLine2'])!.value,
      city: this.editForm.get(['city'])!.value,
      postalCode: this.editForm.get(['postalCode'])!.value,
      country: this.editForm.get(['country'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPerson>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
