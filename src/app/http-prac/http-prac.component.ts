import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostsServiceService } from './posts-service.service';

@Component({
  selector: 'app-http-prac',
  templateUrl: './http-prac.component.html',
  styleUrls: ['./http-prac.component.css']
})
export class HttpPracComponent implements OnInit {
  error: boolean = false;
  errorMessage: string;
  isLoading: boolean = false;
  posts: Post[] = [];
  errorSubscription: Subscription;
  constructor(private httpClient: HttpClient, private postService: PostsServiceService) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dismissError();
    this.fetchPosts();
    this.errorSubscription = this.postService.errorOccured.subscribe((v) => {
      this.error = true;
      this.errorMessage = v;
    })
  }

  reloadPosts() {
    this.dismissError();

    this.fetchPosts();
  }
  private fetchPosts() {
    debugger;
    this.isLoading = true;
    this.postService.getPostList().subscribe({
      next: (val) => {
        this.posts = val;
        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        this.error = true;

        this.postService.errorOccured.next(error.message)
      }
    });
  }
  onSubmit(post: Post) {
    this.dismissError();
    this.postService.postData(post).subscribe({
      next: (v) => {
        this.isLoading = false;
        this.fetchPosts();
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.error = true;

        this.postService.errorOccured.next(error.message)
      }
    });
  }
  deleteAll() {
    this.dismissError();
    this.postService.deleteAllPosts().subscribe({
      next: (v) => {
        this.posts = [];
        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.error = true;
        this.postService.errorOccured.next(error.message);
      }
    })
  }
  dismissError() {

    this.isLoading = false;
    this.error = false;
    this.errorMessage = '';

  }
  ngOnDestroy(): void {
    this.dismissError();
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.errorSubscription.unsubscribe();
  }
}
