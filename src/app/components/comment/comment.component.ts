import { Component, OnInit, Input } from '@angular/core';
import { CommentComplete } from 'src/app/models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() comment?: CommentComplete;

  actualDate: string = new Date().toDateString();
  constructor() {}

  ngOnInit(): void {}
}
