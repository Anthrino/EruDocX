// Λnדhгιnכ™
import {Component} from '@angular/core';
// import {ObservableMedia} from '@angular/flex-layout';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/takeWhile';
// import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EruDocX';
  // public cols: Observable<number>;

  // constructor(private observableMedia: ObservableMedia) {
  // }
  //
  // ngOnInit() {
  //   const grid = new Map([
  //     ['xs', 1],
  //     ['sm', 2],
  //     ['md', 2],
  //     ['lg', 3],
  //     ['xl', 3]
  //   ]);
  //   let start: number;
  //   grid.forEach((cols, mqAlias) => {
  //     if (this.observableMedia.isActive(mqAlias)) {
  //       start = cols;
  //     }
  //   });
  //   this.cols = this.observableMedia.asObservable()
  //     .map(change => {
  //       console.log(change);
  //       console.log(grid.get(change.mqAlias));
  //       return grid.get(change.mqAlias);
  //     })
  //     .startWith(start);
  // }
}
