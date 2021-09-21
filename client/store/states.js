import axios from "axios"

// ACTION TYPES
const SET_STATES = "SET_STATES"
const UPDATE_STATES = "UPDATE_STATES"

// ACTION CREATORS
const _setStates = (states) => {
  return {
    type: SET_STATES,
    states
  }
}

const _updateStates = (states) => {
  return {
    type: UPDATE_STATES,
    states
  }
}

// THUNK CREATORS
export const fetchStates = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/weather")
      dispatch(_setStates(data))
    } catch (error) {
      console.log("There was an error fetching the states!")
    }
  }
}

// STATES REDUCER
export default (state = [], action) => {
  switch (action.type) {
    case SET_STATES:
      return action.states
    default:
      return state
  }
}
