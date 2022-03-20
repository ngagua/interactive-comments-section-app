import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comments, User, ScoresEvent } from '../../model/model';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment!: Comments;
  @Input() reply!: Comments;
  @Input() currentUser!: User;
  @Output() onScore: EventEmitter<ScoresEvent> = new EventEmitter<ScoresEvent>();
  @Output() onScoreReply: EventEmitter<ScoresEvent> = new EventEmitter<ScoresEvent>();
  @Output() onDeleteComment:  EventEmitter<number> = new EventEmitter<number>();
  @Output() onDeleteReply:  EventEmitter<number> = new EventEmitter<number>();
  @Output() onReply: EventEmitter<any> = new EventEmitter<any>();


  isReply: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }
  toggleReply() {
   this.isReply = !this.isReply;
  }

  onDelete(){
    this.onDeleteComment.emit(this.comment?.id)
  }

  onDeleteReplyHandler(id:number) {
    this.onDeleteReply.emit(id);
  }

  changeScore(type: string) {
    this.onScore.emit({
      id: this.comment?.id ? this.comment.id : 0,
      type: type,
    })
  }


  onReplyhandler({ content, id }:any) {
    this.onReply.emit({
      content: content,
      id: id,
    })
    
    this.toggleReply();
  }

  onScoreReplyHandler({ id, type }: ScoresEvent) {
    this.onScoreReply.emit({
      id: id,
      type: type,
    })
  }

}
