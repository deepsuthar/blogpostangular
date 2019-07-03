import { Component, OnInit } from '@angular/core';
import Post from '../Post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-getpost',
  templateUrl: './getpost.component.html',
  styleUrls: ['./getpost.component.css']
})
export class GetpostComponent implements OnInit {


  posts: Post[];

  constructor(private ps: PostService) { }

  ngOnInit() {
    this.ps
      .getPosts()
      .subscribe((data: Post[]) => {
        this.posts = data;
    });
  }



}
