import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map, tap } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {
  baseUrl: string = 'https://learn-angular-a8330-default-rtdb.firebaseio.com/posts.json'
  baseUrlDel: string = 'https://learn-angular-a8330-default-rtdb.firebaseio.com/'
  errorOccured: Subject<string> = new Subject<string>();
  posts: Post[];

  constructor(private httpClient: HttpClient) { }

  postData(post: Post) {
    return this.httpClient.post<{ name: string }>(this.baseUrl, post)

  }

  getPostList() {
    let queryParamsMulti = new HttpParams();
    queryParamsMulti = queryParamsMulti.append('p1', 'v1');
    queryParamsMulti = queryParamsMulti.append('p2', 'v2');

    return this.httpClient.get<{ [key: string]: Post }>(this.baseUrl,
      {
        headers: new HttpHeaders({ 'Custom-Header': 'Shivesh' }),
        params: queryParamsMulti
      })
      .pipe(map((responseData: { [key: string]: Post }) => {
        const arrData: Post[] = [];
        for (const key in responseData) {
          if (Object.prototype.hasOwnProperty.call(responseData, key)) {
            const element = responseData[key];
            arrData.push({ id: key, ...element })
          }
        }
        return arrData;
        console.log(arrData);
      }));

  }

  deleteAllPosts() {
    return this.httpClient.delete(this.baseUrl, {
      observe: 'events'
    }).pipe(tap((event) => {
      console.log(event);
      if (event['type'] == HttpEventType.Sent) {
        console.log("sent request received");
      }
    }));
  }
}
