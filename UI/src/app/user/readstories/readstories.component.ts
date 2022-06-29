import { Component, OnInit } from '@angular/core';
import { Story } from '../../models/story';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-readstories',
  templateUrl: './readstories.component.html',
  styleUrls: []
})
export class ReadstoriesComponent implements OnInit {
  stories: Story[] = [];
  search: string = "";
  p: number = 1;

  getStoriesByStatus(isApproved: boolean) {
    return this.api.getStoriesByStatus(isApproved).subscribe(res => {
      this.stories = res;
    });
  }
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getStoriesByStatus(true);
  }

}
