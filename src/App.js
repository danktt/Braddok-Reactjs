import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Signin } from "./components/Signin/Signin";
import HelpDesk from "./pages/HelpDesk";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Signin}></Route>
                <Route path="/helpdesk" component={HelpDesk}></Route>

            </Switch>
        </Router>
    );
}

export default App;
