import { useContext } from "react";

import { Route, Switch } from "react-router-dom";
import "./App.css";

//imported store
import { store } from "./store/contextStore";

//imported components
import Layout from "./components/Layout/Layout";
import Backdrop from "./components/UI/Backdrop";

//imported pages
import PlaceToStay from "./pages/PlaceToStay";
import AirBnb from "./pages/AirBnb";

function App() {
  const Ctx = useContext(store);
  return (
    <div className="App">
      <Layout>
        {Ctx.isVisible && <Backdrop />}
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
