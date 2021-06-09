import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor() { }
  selectedPerson: Person;
  showPersonDetails: boolean = false;

  ngOnInit(): void {
  }

  sendPersonParentToChild($event) {
    this.selectedPerson = $event;
    this.showPersonDetails = true;
  }

}