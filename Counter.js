import React from "react";
import {connect} from "react-redux";
import {increment} from "./Redux";

function Counter(props){
  return(
    <div>
    <h2>counter value is - {props.counter}</h2>
    <button onClick={props.increment}>Increment Counter </button>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    counter : state.counter,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment : () =>  dispatch(increment())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);