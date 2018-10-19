import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminUserManagerComponent } from './components/admin-user-manager/admin-user-manager.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminUserManagerComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
