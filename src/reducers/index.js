let defaultState = {
    places: [],
    placePage: {
      comments: []
    },
    isShowingHomeDesc: true,
    lat: 14.235,
    lng: 51.9253,
    markers: [],
    selected: null
}

const mainReducer = (state = defaultState, action) => {
  if(action.type === "SET_DATA") {
    return {
    ...state,
    places: action.data
  }
} else if (action.type === "INDIV_DATA") {
  return {
    ...state,
    placePage: action.data
  }
} else if (action.type === "HIDE") {
  return {
    ...state,
    isShowingHomeDesc: false
    }
  } else if (action.type === "SET_MARKERS") {
    console.log(action.data);
    return {
      ...state,
      markers: action.data
    }
  } else if (action.type === "SET_CURRENT") {
    console.log("called set current", action.data);
    return {
      ...state,
      selected: action.data
    }
} else {
    return {
      ...state
    }
  }
}

export default mainReducer;
