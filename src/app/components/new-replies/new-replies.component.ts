import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Comments, User } from 'src/app/model/model';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-new-replies',
  templateUrl: './new-replies.component.html',
  styleUrls: ['./new-replies.component.css']
})
export class NewRepliesComponent implements OnInit {
  @Input() comment!: Comments;
  @Output() AddReply: EventEmitter<Comment> = new EventEmitter();

  content: string = '';
  currentUser!: User;
  
  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.userService.getusers().then(
      data => this.currentUser = data.currentUser);
  }

  addReply () {
    if (!this.content) {
      return;
    }

    const newReply: Comments = {
      content: this.content,
      createdAt: JSON.stringify(new Date(Date.now())),
      score: 0,
      user: this.currentUser,
      replyingTo: this.comment.user.username,
      replies: []
    }

    this.comment.replies.push(newReply);

    // this.onAddReply.emit(this.comment);

    this.content = '';
  }



}
