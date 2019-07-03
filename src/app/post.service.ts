import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  uri = 'http://localhost:4000/post';

  constructor(private http: HttpClient,private route: ActivatedRoute,
    private router: Router) { }

  getPosts() {
    return this
           .http
           .get(`${this.uri}`);
  }

  addPost(blog_title, blog_text, blog_author) {
    const obj = {
      blog_title: blog_title,
      blog_text: blog_text,
      blog_author: blog_author
    };
    this.http.post(`${this.uri}/create`, obj)
        .subscribe(res => console.log('Done'));
        
 
  }

  editPost(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

    viewPost(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }



    updatePost(blog_title, blog_text, blog_author, id) {

      const obj = {
        blog_title: blog_title,
        blog_text: blog_text,
        blog_author: blog_author
        };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

    deletePost(id) {
      return this
                .http
                .get(`${this.uri}/delete/${id}`);
                
    }
}