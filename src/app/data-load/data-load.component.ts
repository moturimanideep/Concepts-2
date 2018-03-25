import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-load',
  templateUrl: './data-load.component.html',
  styleUrls: ['./data-load.component.css']
})
export class DataLoadComponent implements OnInit {

  // @Input() employeeName: string;
  // @Input() employeeCity: string;
  // @Input() employeeSalary: string;

  @Input() employeeName: string;
  @Input() employeeCity: string;
  @Input() employeeSalary: string;

  @Output() sendRecord: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public emitselectedRecord(){
    console.log(this.employeeSalary);
    let selectedEmployeeObj: any = {
      selectedName: this.employeeName,
      selectedCity: this.employeeCity,
      selectedSalary: this.employeeSalary
    }
    this.sendRecord.emit(selectedEmployeeObj);
  }
}
