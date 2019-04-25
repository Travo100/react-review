import React from "react";

function Student(props) {
    return(
    <div>
        <p>Name: {props.name}</p>
        <p>Favorite Subject: {props.favSubject}</p>
        <p>GPA: {props.GPA}</p>
        <hr />
    </div>)
}

export default Student;