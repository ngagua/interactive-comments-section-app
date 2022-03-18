import { Component, OnInit, Input } from '@angular/core';
import { Comments } from 'src/app/model/model';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css']
})
export class RepliesComponent implements OnInit {
  @Input() reply!: Comments;
  constructor() { }

  ngOnInit(): void {
  }

}
