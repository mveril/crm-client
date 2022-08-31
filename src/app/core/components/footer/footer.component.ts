import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  version!:number
  constructor(private versionService:VersionService) {
    versionService.subscribe((number)=>this.version=number);
  }

  ngOnInit(): void {
  }

}
