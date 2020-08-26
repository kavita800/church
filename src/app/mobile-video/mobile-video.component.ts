import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobile-video',
  templateUrl: './mobile-video.component.html',
  styleUrls: ['./mobile-video.component.scss']
})
export class MobileVideoComponent implements OnInit {

  constructor(private router: Router ,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
