import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { TeacherComponent } from './teacher.component';
import { StudentsComponent } from './pages/students/students.component';
import { GradsComponent } from './pages/grads/grads.component';
import { MaterialsComponent } from './pages/materials/materials.component';
import { SchaduleComponent } from './pages/schadule/schadule.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidehostComponent } from './sidehost/sidehost.component';
import { VideosComponent } from './pages/materials/videos/videos.component';
import { DocumentsComponent } from './pages/materials/documents/documents.component';
import { ViewvideoComponent } from './pages/materials/viewvideo/viewvideo.component';

@NgModule({
  declarations: [
    ProfileComponent,
    NavbarComponent,
    TeacherComponent,
    StudentsComponent,
    GradsComponent,
    MaterialsComponent,
    SchaduleComponent,
    SidehostComponent,
    VideosComponent,
    DocumentsComponent,
    ViewvideoComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class TeacherModule { }
