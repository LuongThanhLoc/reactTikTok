import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routesPublic } from "./route/Routes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routesPublic.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
