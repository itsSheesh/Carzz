// ========== packages ========== \\
import { useContext } from "react";
// ========== components & contexes ========== \\
import ModelsNav from "../ModelsNav";
import Carousel from "../Carousel";
import Details from "../Details";
import { DarkModeContext } from "../../context/DarkModeContext";

const Landing: React.FC = (): JSX.Element => {
  const {isDark} = useContext(DarkModeContext)

  return (
    <main className={`${isDark ? 'bg-black' : 'bg-[#684FAE]'} flex flex-1 flex-col justify-between`}>
      <ModelsNav />
      <Carousel />
      <Details />
    </main>
  );
};

export default Landing;
