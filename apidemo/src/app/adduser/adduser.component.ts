import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MockapiService } from '../mockapi.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  private _api = inject(MockapiService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private _activatedRoute = inject(ActivatedRoute);

  userForm: FormGroup;
  id: any = null;

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get("id");

    if (this.id != null) {
      this._api.getById(this.id).subscribe((res) => {
        this.userForm.patchValue(res);
      });
    }
  }

  constructor() {
    this.userForm = this.fb.group({
      Username: ['', Validators.required],
      Image: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      id: ['', Validators.required]
    });
  }

  addUser() {
    if (this.id) {
      this._api.editUser(this.id, this.userForm.value).subscribe((res) => {
        this.router.navigate(['']);
      });
    } else {
      if (this.userForm.valid) {
        this._api.addUser(this.userForm.value).subscribe({
          next: (response) => {
            console.log('User added successfully:', response);
            this.router.navigate(['']);
          },
          error: (err) => console.error('Error adding user:', err)
        });
      }
    }
  }
}