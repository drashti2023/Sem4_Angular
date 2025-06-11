import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MockapiService } from '../mockapi.service';

@Component({
  selector: 'app-users',
  imports: [NgFor,RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  private _api = inject(MockapiService);
  private _router = inject(Router);

  arr = [
    {
      Username: '',
      Image: '',
      email: '',
      id: ''
    }
  ]

  ngOnInit() {
    this._api.getAll().subscribe((res: any) => {
      console.log(res)
      this.arr = res;
    })
  }

  moreDetails(id: any) {
    this._router.navigate(['users', id]);

  }

  deleteUsers(id: any){
    this._api.deleteById(id).subscribe((res: any) => {
      this.ngOnInit()
  })
}
}
