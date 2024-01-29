// ========== packages ========== \\
import { useContext } from "react";

// ========== components and contexes ========== \\
import { DarkModeContext } from "../../context/DarkModeContext";

const Carousel: React.FC = (): JSX.Element => {
  const { isDark } = useContext(DarkModeContext);

  return (
    <div
      className={`${
        isDark ? "text-white" : ""
      }   flex justify-center items-center`}
    >
      Carousel comes here...
    </div>
  );
};

export default Carousel;
