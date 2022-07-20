import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Story } from '../models/story';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "http://localhost:5110/api";

  constructor(private api: HttpClient, public localStorage: LocalStorageService) { }

  //Stories

  getStories() {
    return this.api.get<Story[]>(this.baseUrl + "/stories", { headers: new HttpHeaders().set("Authorization", "Bearer " + this.localStorage.get('Obj').tokenJwt) });
  }

  postStory(story: Story) {
    return this.api.post<Story>(this.baseUrl + "/stories", story,  { headers: new HttpHeaders().set("Authorization", "Bearer " + this.localStorage.get('Obj').tokenJwt) });
  }

  getStoriesByStatus(isApproved: boolean) {
    return this.api.get<Story[]>(this.baseUrl + "/stories/getStoriesByStatus/" + isApproved,  { headers: new HttpHeaders().set("Authorization", "Bearer " + this.localStorage.get('Obj').tokenJwt) });
  }

  approveStory(story: Story) {
    return this.api.put<Story>(this.baseUrl + "/stories/approveStory/" + story.ssId, story,  { headers: new HttpHeaders().set("Authorization", "Bearer " + this.localStorage.get('Obj').tokenJwt) });
  }

  getStoriesByUserId(id: string) {
    return this.api.get<Story[]>(this.baseUrl + "/stories/getStoriesByUserId/" + id, { headers: new HttpHeaders().set("Authorization", "Bearer " + this.localStorage.get('Obj').tokenJwt) } );
  }

  

}

