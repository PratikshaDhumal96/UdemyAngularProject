import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-directives',
  templateUrl: './practice-directives.component.html',
  styleUrls: ['./practice-directives.component.css']
})
export class PracticeDirectivesComponent implements OnInit {

  // numbers = [1,2,3,4,5]
  oddNumbers=[1,3,5]
  evenNumbers= [2,4]

  onlyOdd = false

  constructor() { }

  ngOnInit() {
  }

}
