import { Link, Route, Switch } from "react-router-dom";
import { Rewarders } from "./components/Rewarders";
import { Fusd } from "./pages/fusd";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="w-1/2 mx-auto mt-6">
        <Link className="mr-6" to="/fusd">
          fUSD
        </Link>
        <Link to="/">Rewards</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Rewarders />
        </Route>
        <Route exact path="/fusd">
          <Fusd />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
