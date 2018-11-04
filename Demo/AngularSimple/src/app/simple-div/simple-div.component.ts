import { Component, OnInit } from '@angular/core';
import { MyDiv } from '../MyDiv';
import { SimpleDivService } from '../simple-div.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-simple-div',
  templateUrl: './simple-div.component.html',
  styleUrls: ['./simple-div.component.css']
})
export class SimpleDivComponent implements OnInit {
  swaggerUrl: string;
  online = false;
  div = new MyDiv();
  public message: string;
  public loading: boolean;

  constructor(private myService: SimpleDivService) {}

  ngOnInit() {
    this.div.x = 15;
    this.div.y = 3;
    this.seeOnline();
  }
  seeOnline() {
    this.loading = true;
    this.myService
      .Ping()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        d => {
          console.log('online');
          this.online = true;
        },
        e => {
          this.online = false;
          console.log('offline ' + e.message);
        }
      );
  }
  calculateDiv() {
    const valid = this.div.validate();
    if (!valid) {
      this.message = 'please enter a valid numbers ';
      return;
    }
    this.loading = true;
    // see also http://www.typescriptlang.org/docs/handbook/advanced-types.html
    this.myService
      .MakeDivPOST(this.div)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        it => (this.message = 'done ; result = ' + it.value),
        e => {
          this.message = JSON.stringify(e);
        }
        );
  }
}
