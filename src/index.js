//MAPS API key
//AIzaSyCZUQ1J_gOtxxYvVwDzInu1pDsz7qBgzGM

import React from "react";
import ReactDOM from "react-dom";

//router
import { Route, BrowserRouter, Switch, Scroll } from "react-router-dom";

//redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/";
import thunk from "redux-thunk";

//import components
import "./css/index.css";
import Navbar from "./navbar/navbar.js";
import FormContainer from "./add-place-form/form-container.js";
import PlacesListContainer from "./containers/places-list-container.js";
import PlacePageContainer from "./containers/place-page-container.js";
import ScrollToTop from "./components/scroll.js";

//create the store
const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <BrowserRouter>
          <ScrollToTop>
            <div>
              <Navbar />
              <Switch>
                <Route exact path="/" component={PlacesListContainer} />
                <Route exact path="/addPlace" component={FormContainer} />
                <Route exact path="/place/:id" component={PlacePageContainer} />
              </Switch>
            </div>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
