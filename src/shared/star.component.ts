import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';


@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  cropwidth: number = 75;

  staRating:string="";

  @Input()
  starRating: number = 0 ;

  @Output()
  ratingClick:EventEmitter<string>=new EventEmitter<string>();

  constructor() {
  }

  starNotify():void{
    this.ratingClick.emit('onClicked $(this.rating)');
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.cropwidth = this.starRating * 75 / 5;
  }

}
