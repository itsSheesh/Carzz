// ========== components ========== \\
import Carousel from "../Carousel";
import Details from "../Details";
import ModelsNav from "../ModelsNav";

const Landing: React.FC = (): JSX.Element => {
  return (
    <main className="bg-[#684FAE] flex flex-1 flex-col justify-between">
      <span className="absolute m-auto left-0 right-0 bg-red-600 w-60 md:w-96 h-60 md:h-96 rounded-full md:right-40 md:top-40">
        <span className="absolute text-[60px] md:text-[120px] md:right-20 md:top-0 font-bold opacity-30 text-white">Ferrari</span>
      </span>
      <ModelsNav />
      <Carousel />
      <Details />
    </main>
  );
};

export default Landing;
