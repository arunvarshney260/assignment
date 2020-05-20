import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrls: ['./engagement.component.css']
})
export class EngagementComponent implements OnInit {
  likecount=0;
  dislikecount=0;
  likeincrease(){
    this.likecount = this.likecount+1;
    alert("Thanks for liking");
  }
  dislikeincrease(){
    this.dislikecount = this.dislikecount+1;
    alert("Sorry ! don't dislike me");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
