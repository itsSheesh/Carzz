// ========== packages ========== \\
import { useContext } from "react";
// ========== components ========== \\
import { Context } from "../../context/AppContext";
import RightArrow from "../Common/Icons/RightArrow";
import List from "../Common/List";

const Sidebar: React.FC = (): JSX.Element => {
  const { sidebar, toggleShow } = useContext(Context);

  return (
    <div
      className={`flex flex-col fixed w-full md:w-[350px] bg-white right-0 top-0 h-full shadow-lg ease-in-out duration-200 z-10
         ${sidebar ? "translate-x-0 " : "translate-x-full"}`}
    >
      <div className="bg-gray-200 flex justify-between py-5 px-4">
        <span className="cursor-pointer" onClick={toggleShow}>
          <RightArrow />
        </span>
        <span>Car Brands</span>
      </div>
      <List />
    </div>
  );
};

export default Sidebar;
