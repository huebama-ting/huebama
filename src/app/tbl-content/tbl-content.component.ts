import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-tbl-content',
  templateUrl: './tbl-content.component.html',
  styleUrls: ['./tbl-content.component.css']
})
export class TblContentComponent implements OnInit {
  anchors: any[] = [
    { link: 'comp-desc', name: 'Company Description' },
    { link: 'job-desc', name: 'Job Description' },
    { link: 'goals', name: 'Goals' },
    { link: 'bonus', name: 'Bonus' },
    { link: 'conc-ack', name: 'Conclusion/Acknowledgements' }
  ];

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scroll(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
  }

}
