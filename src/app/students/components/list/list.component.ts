import { Component } from '@angular/core';
import { StudentsService } from 'src/app/students/services/students.service';
import { Students } from '../../interfaces/student.interface';

@Component({
  selector: 'student-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public students: Students[] = [];
  public columnAge: boolean = false;

  constructor(public dataStudents: StudentsService) {}

  ngOnInit() {
    this.dataStudents.getDatos().subscribe((data) => {
      this.students = data.students.map((student: Students) => student);
      console.log(this.students);
    });
  }

  orderStudentByNames(): void {
    if (!this.columnAge) {
      this.students.sort((a, b) => a.name.localeCompare(b.name));
      this.columnAge = true;
    }
    else if(this.columnAge) {
      this.students.sort((a, b) => b.name.localeCompare(a.name));
      this.columnAge = false;
    }
  }
}
