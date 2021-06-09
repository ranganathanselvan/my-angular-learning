import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../../models/people';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  constructor() { }
  listPerson: Person[] = [
    { firstName: 'Barry', lastName: 'Allen', empNo: '', mobile: '', location:'', department:'', designation: 'Senior System Engineer', joiningDate:'', dateOfBirth: '', nationality: '', reportingTo: '', status:'', maritalStatus: '', organizationName: 'Star Labs'},
    { firstName: 'Holly', lastName: 'Branson', empNo: '', mobile: '', location:'', department:'', designation: 'Chief Purpose and Vision Officer', joiningDate:'', dateOfBirth: '', nationality: '', reportingTo: '', status:'', maritalStatus: '', organizationName: 'Virgin'},
    { firstName: 'Sharon', lastName: 'Vincent', empNo: '', mobile: '', location:'', department:'', designation: 'Package Implementation Consultant', joiningDate:'', dateOfBirth: '', nationality: '', reportingTo: '', status:'', maritalStatus: '', organizationName: 'LTI - Larsen & Toubro Infotech'},
    { firstName: 'Kevin', lastName: 'O Leary', empNo: '', mobile: '', location:'', department:'', designation: 'Chairman', joiningDate:'', dateOfBirth: '', nationality: '', reportingTo: '', status:'', maritalStatus: '', organizationName: 'O Shares Investment Advisers'},
    { firstName: 'Alejandro', lastName: 'Mattiauda', empNo: '', mobile: '', location:'', department:'', designation: 'Technical Leader', joiningDate:'', dateOfBirth: '', nationality: '', reportingTo: '', status:'', maritalStatus: '', organizationName: 'Atos'},
    { firstName: 'Francisco', lastName: 'Avalos', empNo: '', mobile: '', location:'', department:'', designation: 'Sr. Agile Project Manager', joiningDate:'', dateOfBirth: '', nationality: '', reportingTo: '', status:'', maritalStatus: '', organizationName: 'CUDirect'}
    ];

    selectedPerson: Person;
    @Output() selectedPersonToSibling = new EventEmitter<Person>();

  ngOnInit(): void {
    
  }

  selectedPersonEvent(index) { 
    this.selectedPerson = this.listPerson[index];
    this.selectedPersonToSibling.emit(this.selectedPerson);
  }

}