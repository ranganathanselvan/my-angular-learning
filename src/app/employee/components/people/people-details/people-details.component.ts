import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../../models/people';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  constructor() { }
  @Input() selectedPersonDetails: Person;

  ngOnInit(): void {
  }

}