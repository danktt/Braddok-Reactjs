import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Signin } from "./components/Signin/Signin";
import HelpDesk from "./pages/HelpDesk";
import 'bootstrap/dist/css/bootstrap.min.css';
import Guarda from "./pages/Guarda";
import FatosObs from "./pages/FatosObs";
import PlanoChamadas from "./pages/Chamadas";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Signin}></Route>
                <Route path="/guarda" component={Guarda}></Route>
                <Route path="/helpdesk" component={HelpDesk}></Route>
                <Route path="/fatos-obs" component={FatosObs}></Route>
                <Route path="/plano-chamada" component={PlanoChamadas}></Route>

            </Switch>
        </Router>
    );
}

export default App;
