import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  angForm: FormGroup;
  constructor( 
    private fb: FormBuilder, 
    private ps: PostService,
    private route: ActivatedRoute,
    private router: Router,
   
    ) {
    this.createForm();
  }

  public edited = false
  createForm() {
    this.angForm = this.fb.group({
      blog_title: ['', Validators.required ],
      blog_text: ['', Validators.required ],
      blog_author: ['', Validators.required ]
    });
  }



  ngOnInit() {
  }

  addPost(blog_title,blog_text, blog_author){
    this.ps.addPost(blog_title, blog_text, blog_author);

    this.edited = true;
    setTimeout(function() {
      this.edited = false;
      this.router.navigate(['post']);
    }.bind(this), 3000);
  }

}
