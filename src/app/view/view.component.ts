import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  post: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ps: PostService
   ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.viewPost(params['id']).subscribe(res => {
          this.post = res;
      });
    });
  }

  public deleted = false;

  deletePost(id){
    this.ps.deletePost(id).subscribe(res => {
      
   
    })
    
 
  }
}
