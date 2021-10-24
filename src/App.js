import { Switch, Route } from "react-router";
import MainLayOut from "./components/layouts/MainLayOut";
import Navbar from "./components/layouts/navbar/Navbar";
import Home from "./components/pages/home/Home";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayOut>
              <Home />
            </MainLayOut>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
