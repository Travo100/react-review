import React, { Component } from 'react';
import API from "./../utils/API";

class Add extends Component {

  state = {
    name: "",
    favSubject: "",
    GPA: 0
  };

  handleInput = e => {
    const {name, value} = e.target;
    // let name = e.target.name;
    // let value = e.target.value;
    this.setState({[name]: value});
  }

  handleFormSubmit = e => {
    e.preventDefault();
    alert(`Sending data for ${this.state.name}`);
    API
      .addStudent(this.state)
      .then(res => {
        alert(`Added new student ${res.data.name}`)
        this.setState({
          name: "",
          favSubject: "",
          GPA: 0
        });
      }).catch(err => console.log(err));
  }


  render() {
    return (
      <div className="add">
        <form>
          <div className="form-group">
            <label htmlFor="name">Student Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              className="form-control" 
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="favSubject">Favorite Subject</label>
            <input 
              type="text" 
              name="favSubject" 
              id="favSubject" 
              className="form-control" 
              placeholder="Enter fav subject"
              value={this.state.favSubject}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gpa">GPA</label>
            <input 
              type="number" 
              name="GPA" 
              id="gpa" 
              className="form-control" 
              placeholder="Enter GPA"
              value={this.state.GPA}
              onChange={this.handleInput} 
            />
          </div>
          
          <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}


export default Add;
