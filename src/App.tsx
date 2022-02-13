import { useRoutes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/ui/nav/NavBar";
import routes from "./router";

function App() {
  const router = useRoutes(routes);

  return (
    <div className="App">
      <NavBar />
      {router}
    </div>
  );
}

export default App;
