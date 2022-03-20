import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comments, User } from 'src/app/model/model';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-new-replies',
  templateUrl: './new-replies.component.html',
  styleUrls: ['./new-replies.component.css']
})
export class NewRepliesComponent implements OnInit {
  @Output() onReply: EventEmitter<string> = new EventEmitter<string>();


  content: string = '';
  currentUser!: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getusers().then(
      data => this.currentUser = data.currentUser);
  }

  addReply() {
    if (!this.content) {
      return;
    }

    this.onReply.emit(this.content);
    this.content = '';
  }




}
