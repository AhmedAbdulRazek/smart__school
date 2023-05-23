import { Component, Input } from '@angular/core';
import { material } from 'src/app/data/material';
import { HostmanagerService } from 'src/app/services/hostmanager.service';
import { MaterialService } from 'src/app/services/material.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  @Input()subjectId:number=-1;
  documents:material[]=[];
  constructor(private materialservice:MaterialService,private hostman:HostmanagerService) { }
  ngOnInit(): void {
    if(this.subjectId!=null){
      this.getDocuments()
    }
  }
  
  getDocuments(){
    this.materialservice.getfilebysubject(this.subjectId,"documents").subscribe({
      next:(res:any)=>{
        this.documents=res;
    }
    })
  }
  showdoccument(item:any){
    window.open(environment.imgeurl+item.path,"_blank");
  }
}
