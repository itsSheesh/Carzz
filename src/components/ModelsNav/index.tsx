// ========== packages ========== \\
import { useState, useContext } from "react";

// ========== components and contextes ========== \\
import { ModelsContext } from "../../context/ModelContext";

const ModelsNav: React.FC = (): JSX.Element => {
  const { models } = useContext(ModelsContext);
  const [activeStates, setActiveStates] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleModelHover = (id: number) => {
    setActiveStates((prevStates) => ({
      [id]: !prevStates[id],
    }));
  };
  return (
    <div className="h-[80px] flex items-center justify-center">
      {models.map((model) => {
        return (
          <div
            key={model.id}
            className="flex m-3 sm:m-6 md:m-10 cursor-pointer select-none"
          >
            <h1
              className={` text-lg text-white ${
                activeStates[model.id]
                  ? "font-bold border-b-2 border-white text-xl"
                  : ""
              }`}
              onClick={() => handleModelHover(model.id)}
            >
              {model.name}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default ModelsNav;
