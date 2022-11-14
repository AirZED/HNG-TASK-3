import { useState } from "react";

import { Route, Switch } from "react-router-dom";
import "./App.css";

//imported components
import Layout from "./components/Layout/Layout";
import Backdrop from "./components/UI/Backdrop";

//imported pages
import PlaceToStay from "./pages/PlaceToStay";
import AirBnb from "./pages/AirBnb";

function App() {
  return (
    <div className="App">
      <Layout>
        {/*<Backdrop />*/}
        <Switch>
          <Route path="/Air BnB">
            <AirBnb />
          </Route>
          <Route path="/place to stay">
            <PlaceToStay />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
