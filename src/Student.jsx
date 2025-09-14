import React from "react"
import PropTypes from "prop-types"
function Student(props){
    return(
        <>
            <div className="">
                <p>Name: {props.name}</p>
            </div>
        </>
    )
}
Student.propTypes = {
    name: PropTypes.string,
}

Student.defaultProps ={
    name : "Guest",
}

export default Student;