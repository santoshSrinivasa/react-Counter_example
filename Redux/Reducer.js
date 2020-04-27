import {Increment} from "./ActionTypes";

const initialState = {
  counter : 10,
}

const reducer = (state = initialState,action) => {
  switch(action.type){
    case Increment : return {
      counter : state.counter + 1
    }
    default : return state
  }
}

export default reducer;