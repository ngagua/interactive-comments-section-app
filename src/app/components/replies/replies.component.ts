import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comments, ScoresEvent, User } from 'src/app/model/model';


@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css']
})
export class RepliesComponent implements OnInit {
  @Input() reply!: Comments;
  @Input() currentUser!: User;
  @Output() onScoreReply: EventEmitter<ScoresEvent> = new EventEmitter<ScoresEvent>();
  @Output() onDeleteReply:  EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(){
    this.onDeleteReply.emit(this.reply?.id)
  }
  changeReplyScore(type: string) {
    this.onScoreReply.emit({
      id: this.reply?.id ? this.reply.id : 0,
      type: type,
    })
  }

}
