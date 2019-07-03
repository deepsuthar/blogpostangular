import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {


  post: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ps: PostService,
    private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
        blog_title: ['', Validators.required ],
        blog_text: ['', Validators.required ],
        blog_author: ['', Validators.required ]
      });
    }

    updatePost(blog_title, blog_text, blog_author) {
      this.route.params.subscribe(params => {
         this.ps.updatePost(blog_title, blog_text, blog_author, params['id']);
         this.router.navigate(['post']);
   });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editPost(params['id']).subscribe(res => {
          this.post = res;
      });
    });
  }
}
