import "./App.css";
import CharactersList from "./pages/CharactersList";
import { Route, Routes, Switch } from "react-router";
import Character from "./pages/Character";

function App() {
  return (
    <div className="App">
      <CharactersList/>
      {/* <Routes>
        <Route strict exact path='/' component={CharactersList} />
        <Route strict exact path='/:id' component={Character} />
      </Routes> */}
    </div>
  );
}

export default App;
