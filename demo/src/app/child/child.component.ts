import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  result!: boolean;

  constructor() { }

  @Input()
  inputFrmParent!: any;
  givenStr: any;
  refstrng:any;

  ngOnInit(): void {

  }

  angram() {
    var str1 = this.inputFrmParent;
    console.log(str1);
    //variable for count char which are fount n other string 
     var chrFondCnt = 0;
     var str = ['Race', 'Heart', 'Part', 'Listen'];
    this.refstrng=str;
     if (str1.length > str.length) {
      this.result = false;
    }
     for (var i = 0; i < str1.length; i++) {

      // console.log(char)
        var x = str.join().includes(str1[i])
         if (x === true)
         chrFondCnt++;

    }

    // console.log(chrFondCnt);
    // console.log(str.length);

    if (chrFondCnt === str1.length) {
      this.result = true;
    }
    else {
      this.result = false;
    }


  }
}