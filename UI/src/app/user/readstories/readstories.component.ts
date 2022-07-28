import { Component, OnInit } from '@angular/core';
import { Story } from '../../models/story';
import { ApiService } from '../../services/api.service';

import { AngularCsv } from 'angular7-csv/dist/Angular-csv';

@Component({
  selector: 'app-readstories',
  templateUrl: './readstories.component.html',
  styleUrls: []
})
export class ReadstoriesComponent implements OnInit {
  stories: Story[] = []; reslut!: any[];
  search: string = "";
  p: number = 1;


  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'List Of Approved Stories',
    noDownload: false,
    headers: ["ssId", "ssTitle", "ssDescription", "Id"]
  };

  getStoriesByStatus(isApproved: boolean) {
    return this.api.getStoriesByStatus(isApproved).subscribe(res => {
      this.stories = res;
    });
  }
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getStoriesByStatus(true);
  }
  
 

  downloadCSV() {
    this.reslut = this.stories.map(x => ({
      "ssId": x.ssId,
      "ssTitle": x.ssTitle,
      "ssDescription": x.ssDescription,
      "Id": x.id
    })
    );
    new AngularCsv(this.reslut, "Stories", this.csvOptions);
  }
}
