import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signin from "./components/Signin/Signin";
import HelpDesk from "./pages/HelpDesk";
import Guarda from "./pages/Guarda";
import FatosObs from "./pages/FatosObs";
import PlanoChamadas from "./pages/Chamadas";

import StoreProvider from "./components/Store/Provider";
import RoutesPrivate from "./components/Routes/Private/Private";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <StoreProvider>
        <Switch>
          <Route exact path="/" component={Signin}></Route>
          <RoutesPrivate path="/guarda" component={Guarda}></RoutesPrivate>
          <RoutesPrivate path="/helpdesk" component={HelpDesk}></RoutesPrivate>
          <RoutesPrivate path="/fatos-obs" component={FatosObs}></RoutesPrivate>
          <RoutesPrivate path="/plano-chamada" component={PlanoChamadas}></RoutesPrivate>
        </Switch>
      </StoreProvider>
    </Router>
  );
}

export default App;
