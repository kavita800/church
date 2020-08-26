import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mobile-video',
  templateUrl: './mobile-video.component.html',
  styleUrls: ['./mobile-video.component.scss']
})
export class MobileVideoComponent implements OnInit {
safeURL : any;
pageName : string;
  constructor(private router: Router ,private route: ActivatedRoute, private _sanitizer: DomSanitizer) { 
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('http://www.ctvchannel.tv/Pages/Live.aspx');
    this.pageName =  this.route.snapshot.paramMap.get('page')
  }

  ngOnInit(): void {
  }

}
