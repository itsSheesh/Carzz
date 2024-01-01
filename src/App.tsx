// ========== packages ========== \\
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ========== components & contexes ========== \\
import HomePage from "./page/Main";
import CarDetails from "./page/Details";


import AppContext from "./context/AppContext";
import ModelContextProvider from "./context/ModelContext";
import BrandContextProvider from "./context/BrandContext";
import DarkModeContextProvider from "./context/DarkModeContext";

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <DarkModeContextProvider>
        <AppContext>
          <BrandContextProvider>
            <ModelContextProvider>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:carId" element={<CarDetails/>}/>
              </Routes>
            </ModelContextProvider>
          </BrandContextProvider>
        </AppContext>
      </DarkModeContextProvider>
    </BrowserRouter>
  );
};

export default App;
