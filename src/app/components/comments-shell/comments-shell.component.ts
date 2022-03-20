import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Comments, User, ScoresEvent } from '../../model/model';


@Component({
  selector: 'app-comments-shell',
  templateUrl: './comments-shell.component.html',
  styleUrls: ['./comments-shell.component.css']
})
export class CommentsshellComponent implements OnInit {
  @Input() comments!: Comments[];
  @Input() comment!: Comments;

  commentslist: Comments[] = []
  currentUser!: User;


  ngOnInit(): void {
    this.userService.getusers().then(
      data => {
        this.commentslist = data.comments;
        this.currentUser = data.currentUser;

      });


  }

  constructor(private userService: UserService) { }


  onScoreHandler({ id, type }: ScoresEvent) {
    this.commentslist.forEach(item => {
      if (item.id == id) {
        if (type == "minus") {
          --item.score;
          if (item.score < 0) {
            item.score = 0;
          }
        } else {
          ++item.score;
        }
      }
    })
  }
  onScoreReplyHandler({ id, type }: ScoresEvent) {
    this.commentslist.forEach(item => {
      item.replies.forEach(reply => {
        if ((reply.id == id)) {
          if (type == "minus") {
            --reply.score;
            if (reply.score < 0) {
              reply.score = 0;
            }
          } else {
            ++reply.score;
          }

        }
      })
    })


  }



  onCommenthandler(content: string) {
    const newComment: Comments = {
      content: content,
      createdAt: JSON.stringify(new Date(Date.now())),
      score: 0,
      user: this.currentUser,
      replies: []
    }

    this.commentslist.push(newComment);

  }


}
