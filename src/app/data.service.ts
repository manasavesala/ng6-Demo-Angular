import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
  public getUser(userid) {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users/'+ userid);
  }
  public getPosts() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

}
