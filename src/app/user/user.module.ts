import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './list/list.component';
import { UserDetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './user-detail.guard';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'user/list',
        component: UserListComponent,
      },
      {
        path: 'user/detail/:id',
        canActivate: [AuthGuard],
        component: UserDetailComponent,
      },
    ])
  ],
  exports: [
    UserListComponent
  ]
})
export class UserModule { }
