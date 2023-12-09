// ========== components ========== \\
import Landing from "../../components/Landing";
import Sidebar from "../../components/sidebar";
import Main from "../../layout/main";

const HomePage: React.FC = (): JSX.Element => {

  return (
      <Main>
        <Sidebar />
        <Landing />
      </Main>
  );
};

export default HomePage;
