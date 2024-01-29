// ========== components ========== \\
import DetailCarPage from "./index";
// ========== components ========== \\
import Main from "../../layout/main";
import Sidebar from "../../components/sidebar";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <Main>
      <Sidebar />
      <DetailCarPage />
    </Main>
  );
};

export default HomePage;
