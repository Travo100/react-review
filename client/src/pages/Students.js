import React, { Component } from 'react';
import API from "./../utils/API";
import Student from "./../components/Student";
import triton from "./../assets/images/triton.jpg";

class Students extends Component {

  state = {
    name: "Class",
    students: []
  }

  componentDidMount() {
    API
      .getAllStudents()
      .then(res => this.setState({ students: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
        <div className="students">
            <h1>Hello {this.state.name}!</h1>
            <img src={triton} alt="UCSD Triton" />
            {this.state.students.map(student => (
            <Student
                key={student._id}
                name={student.name}
                favSubject={student.favSubject}
                GPA={student.GPA}
            />
            ))}
        </div>
    )
  }
}


export default Students;
