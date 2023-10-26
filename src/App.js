import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
// Styles
import "./styles/App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route) => (
          <Route path={route.path} Component={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
