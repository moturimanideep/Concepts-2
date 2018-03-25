import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  employee_records: any = [
    {ename: 'Manideep', ecity: 'Hyderabad', esalary: '50K'},
    {ename: 'Tharun', ecity: 'Hyderabad', esalary: '50K'},
    {ename: 'Naveen', ecity: 'Delhi', esalary: '50K'},
    {ename: 'Hari Poorna', ecity: 'Rajamundry', esalary: '50K'},
    {ename: 'Mahesh', ecity: 'Hyderabad', esalary: '50K'},
  ];
  public selectedEmployeeData: any = {
    selectedName: '',
    selectedCity: '',
    selectedSalary: ''
  }
  getRecord(data: any){
    this.selectedEmployeeData = data;
    console.log(data);
  }
}
