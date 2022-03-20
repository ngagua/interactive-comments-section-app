import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comments, ScoresEvent } from 'src/app/model/model';


@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css']
})
export class RepliesComponent implements OnInit {
  @Input() reply!: Comments;
  @Output() onScoreReply: EventEmitter<ScoresEvent> = new EventEmitter<ScoresEvent>();
  constructor() { }

  ngOnInit(): void {
  }

  changeReplyScore(type: string) {
    this.onScoreReply.emit({
      id: this.reply?.id ? this.reply.id : 0,
      type: type,
    })
  }

}
