import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  value=10;
  onlyOddNumber=false;
  numbers=[1,2,3,4,5];
  oddNumbers=[1,3,5];
  evenNumbers=[2,4];
  onlyOdd(){
    this.onlyOddNumber=!this.onlyOddNumber;
  }
}
