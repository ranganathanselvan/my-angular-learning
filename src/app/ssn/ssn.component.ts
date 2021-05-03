import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ssn',
  templateUrl: './ssn.component.html',
  styleUrls: ['./ssn.component.css']
})
export class SsnComponent implements OnInit {

  hideSsn: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  eyeToggle(setEye: boolean) {
    this.hideSsn = setEye;
  }
}
