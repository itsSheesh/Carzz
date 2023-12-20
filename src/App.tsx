// ========== components ========== \\
import AppContext from "./context/AppContext";
import HomePage from "./page/Main";
import ModelContextProvider from "./context/ModelContext";
const App: React.FC = (): JSX.Element => {
  return (
    <AppContext>
      <ModelContextProvider>
        <HomePage />
      </ModelContextProvider>
    </AppContext>
  );
};

export default App;
