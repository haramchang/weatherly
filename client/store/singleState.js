import axios from "axios"

// ACTION TYPES
const SET_SINGLE_STATE = "SET_SINGLE_STATE"

// ACTION CREATORS
export const _setSingleState = (state) => {
  return {
    type: SET_SINGLE_STATE,
    state
  }
}

// THUNK CREATORS
export const fetchSingleState = (state) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/weather/${state}`)
      dispatch(_setSingleState(data))
    } catch (error) {
      console.log("There was an error fetching a single state!")
    }
  }
}

// SINGLE STATE REDUCER
export default (state = {}, action) => {
  switch (action.type) {
    case SET_SINGLE_STATE:
      return action.state
    default:
      return state
  }
}
