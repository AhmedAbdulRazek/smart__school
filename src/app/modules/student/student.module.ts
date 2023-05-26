import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { StudentComponent } from './student.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { SidehostComponent } from './sidehost/sidehost.component';
import { MaterialComponent } from './pages/material/material.component';
import { GradComponent } from './pages/grad/grad.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [
    ProfileComponent,
    StudentComponent,
    NavbarComponent,
    SidehostComponent,
    MaterialComponent,
    GradComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    MaterialModule,
    AuthModule
    ]
})
export class StudentModule { }
