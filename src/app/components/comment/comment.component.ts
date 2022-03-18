import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comments } from '../../model/model';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment!: Comments;

  constructor() { }

  ngOnInit(): void {
  }

}
