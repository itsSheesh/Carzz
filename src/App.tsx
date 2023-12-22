// ========== components ========== \\
import AppContext from "./context/AppContext";
import HomePage from "./page/Main";
import ModelContextProvider from "./context/ModelContext";
import DarkModeContextProvider from "./context/DarkModeContext";
const App: React.FC = (): JSX.Element => {
  return (
    <DarkModeContextProvider>
      <AppContext>
        <ModelContextProvider>
          <HomePage />
        </ModelContextProvider>
      </AppContext>
    </DarkModeContextProvider>
  );
};

export default App;
