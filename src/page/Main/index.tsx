// ========== components ========== \\
import { useContext, useEffect } from "react";
import Landing from "../../components/Landing";
import Sidebar from "../../components/sidebar";
import AppContext, { Context } from "../../context/AppContext";
import Main from "../../layout/main";

const HomePage: React.FC = (): JSX.Element => {

  const {sidebar} = useContext(Context)
  
  useEffect(() => {
    console.log(sidebar)
  }, [sidebar])

  return (
    <AppContext>
      <Main>
        {sidebar && <Sidebar />}
        <Landing />
      </Main>
    </AppContext>
  );
};

export default HomePage;
