import '../App.css'
import PropTypes from 'prop-types'

function Students(props){
  return(
   <div>
     <h2>
      Students List
    </h2>
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <p>Student: {props.isStudent ? "Yes" : "Nahh"}</p>
   </div>
  )
}
Students.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}
Students.defaultProps = {
  name: "Guest",
  age:0,
  isStudent:false,

}
export default Students