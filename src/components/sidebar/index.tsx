import { useContext } from "react";
import { Context } from "../../context/AppContext";
import Lefticon from "../Common/Icons/Lefticon";

const Sidebar = () => {
  const { toggleShow } = useContext(Context);
  const { sidebar } = useContext(Context);

  return (
    <div
      className={`flex flex-col fixed w-full md:w-[400px] bg-white right-0 top-0 h-full opacity-95 shadow-lg ease-in-out duration-200
         ${sidebar ? "translate-x-0 " : "translate-x-full"}`}
    >
      <div className="bg-gray-200 flex justify-between py-5 px-4">
        <span className="cursor-pointer" onClick={toggleShow}>
          <Lefticon />
        </span>
        <span>Select A Car, Get Details</span>
      </div>
    </div>
  );
};

export default Sidebar;
