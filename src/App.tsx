// ========== components ========== \\
import AppContext from "./context/AppContext";
import HomePage from "./page/Main";
const App: React.FC = (): JSX.Element => {
  return (
    <AppContext>
      <HomePage />
    </AppContext>
  );
};

export default App;
