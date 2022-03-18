import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Comments,  User } from '../../model/model';


@Component({
  selector: 'app-comments-shell',
  templateUrl: './comments-shell.component.html',
  styleUrls: ['./comments-shell.component.css']
})
export class CommentsshellComponent implements OnInit {
  @Input() comments!: Comments[];
  
  commentslist: Comments[]=[] 
  

  ngOnInit(): void {
    this.userService.getusers().then(
      data => this.commentslist = data.comments);
    
      
  }
  
  constructor(private userService: UserService) {}



}
