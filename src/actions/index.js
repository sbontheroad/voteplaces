let axios = require('axios');

export function loadData() {
  return (dispatch) => {
    //shortening url to go live, they were like this: return axios.get("http://localhost:8080/votes").then((response) => {
    //this is removing local host up to the forward slash. If it is pulling from a api with a different url - keep that url
    return axios.get("/votes").then((response) => {
      dispatch(setData(response.data.data));
    })
    .catch((err) => {
      return err;
    });
  }
}

export function loadDataById(id) {
  return (dispatch) => {
    return axios.get(`/votes/${id}`).then((response) => {
      dispatch(setSingleData(response.data.data));
    })
    .catch((err) => {
      throw err;
    })
  }
}

export function addData(data) {
  return (dispatch) => {
    return axios.post("/votes", data).then((response) => {
      dispatch(loadData());
    })
    .catch((err) => {
      return err;
    });
  }
}

export function voteUp(id, e) {
  console.log(e);
  return (dispatch) => {
    return axios.put(`/votes/voteUp/${id}`).then((response) => {
      dispatch(loadData());
      dispatch(loadDataById(id));
    })
    .catch((err) => {
      throw err;
    })
  }
}

export function voteDown(id) {
  return (dispatch) => {
    return axios.put(`/votes/voteDown/${id}`).then((response) => {
      dispatch(loadData());
      dispatch(loadDataById(id));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function deleteData(id) {
  return (dispatch) => {
    return axios.delete(`/votes/${id}`).then((response) => {
      dispatch(loadData());
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function comment(id, comment) {
  return (dispatch) => {
    return axios.put(`/votes/comment/${id}`, {comment}).then((response) => {
      dispatch(loadData());
      dispatch(loadDataById(id));
    })
    .catch((err) => {
      return err;
    });
  }
}

export function hideDesc() {
  return {
    type: "HIDE"
  }
}

function setData(data) {
  return {
    type: "SET_DATA",
    data
  }
}

function setSingleData(data) {
  return {
    type: "INDIV_DATA",
    data
  }
}


////MAPS ACTIONS
export function loadMarkers() {
  return (dispatch) => {
    return axios.get("/map").then((response) => {
      dispatch(setMarkers(response.data.data));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function addMarker(input) {
  return (dispatch) => {
    let data = {
      position: {
        lat: input.lat,
        lng: input.lng
      },
      label: input.label
    }
    return axios.post("/map", data).then((response) => {
      dispatch(loadMarkers());
    })
    .catch((err) => {
      throw err;
    })
  }
}

export function deleteMarker(data) {
  return (dispatch) => {
    return axios.delete(`/map/${data._id}`).then((response) => {
      dispatch(loadMarkers());
      dispatch(setCurrent(data));
    })
    .catch((err) => {
      throw err;
    });
  }
}

export function setMarkers(data) {
  return {
    type: "SET_MARKERS",
    data
  }
}

export function setCurrent(data) {
  return {
    type: "SET_CURRENT",
    data
  }
}
