// ========== packages ========== \\
import { useContext } from "react";

// ========== components ========== \\
import { Context } from "../../context/AppContext";
import RightArrow from "../Common/Icons/RightArrow";

// ========== LOGO ========== \\
import ToyotaLogo from "../Common/Icons/Logo/ToyotaLogo";
import NissanLogo from "../Common/Icons/Logo/NissanLogo";
import LexusLogo from "../Common/Icons/Logo/LexusLogo";
import HondaLogo from "../Common/Icons/Logo/HondaLogo";
import BMWLogo from "../Common/Icons/Logo/BMWLogo";
import MercedesLogo from "../Common/Icons/Logo/MercedesLogo";
import PeugeotLogo from "../Common/Icons/Logo/PeugeotLogo";
import LamborghiniLogo from "../Common/Icons/Logo/LamborghiniLogo";
import VolkswagenLogo from "../Common/Icons/Logo/VolkswagenLogo";
import ChevroletLogo from "../Common/Icons/Logo/ChevroletLogo";
import PorscheLogo from "../Common/Icons/Logo/PorscheLogo";
import DodgeLogo from "../Common/Icons/Logo/DodgeLogo";
import FerrariLogo from "../Common/Icons/Logo/FerrariLogo";
import JeepLogo from "../Common/Icons/Logo/JeepLogo";
import SubaruLogo from "../Common/Icons/Logo/SubaruLogo";
import BugattiLogo from "../Common/Icons/Logo/BugattiLogo";
import HyundaiLogo from "../Common/Icons/Logo/HyundaiLogo";
// =====> this is for Chery logo <===== \\
import AudiLogo from "../Common/Icons/Logo/AudiLogo";
import TeslaLogo from "../Common/Icons/Logo/TeslaLogo";


const Sidebar:React.FC = ():JSX.Element => {
  const { toggleShow } = useContext(Context);
  const { sidebar } = useContext(Context);

  return (
    <div
      className={`flex flex-col fixed w-full md:w-[350px] overflow-y-auto bg-white right-0 top-0 h-full opacity-95 shadow-lg ease-in-out duration-200
         ${sidebar ? "translate-x-0 " : "translate-x-full"}`}
    >
      <div className="bg-gray-200 flex justify-between py-5 px-4">
        <span className="cursor-pointer" onClick={toggleShow}>
          <RightArrow />
        </span>
        <span>Select A Car, Get Details</span>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <ToyotaLogo/ >
        <h1 className="ml-2 text-lg font-bold">Toyota</h1>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <NissanLogo />
        <h1 className="ml-2 text-lg font-bold">Nissan</h1>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <LexusLogo />
        <h1 className="ml-2 text-lg font-bold">Lexus</h1>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <HondaLogo />
        <h1 className="ml-2 text-lg font-bold">Honda</h1>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <BMWLogo />
        <h1 className="ml-2 text-lg font-bold">BMW</h1>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <MercedesLogo />
        <h1 className="ml-2 text-lg font-bold">Mercedes</h1>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <PeugeotLogo />
        <h1 className="ml-2 text-lg font-bold">Peugeot</h1>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <LamborghiniLogo />
        <h1 className="ml-2 text-lg font-bold">Lamborghini</h1>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <VolkswagenLogo />
        <h1 className="ml-2 text-lg font-bold">Volkswagen</h1>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <ChevroletLogo />
        <h1 className="ml-2 text-lg font-bold">Chevrolet</h1>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <PorscheLogo />
        <h1 className="ml-2 text-lg font-bold">Porsche</h1>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <DodgeLogo />
        <h1 className="ml-2 text-lg font-bold">Dodge</h1>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <FerrariLogo />
        <h1 className="ml-2 text-lg font-bold">Ferrari</h1>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <JeepLogo />
        <h1 className="ml-2 text-lg font-bold">Jeep</h1>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <SubaruLogo />
        <h1 className="ml-2 text-lg font-bold">Subaru</h1>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <BugattiLogo />
        <h1 className="ml-2 text-lg font-bold">Bugatti</h1>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <HyundaiLogo />
        <h1 className="ml-2 text-lg font-bold">Hyundai</h1>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <BMWLogo />
        <h1 className="ml-2 text-lg font-bold">Cherry</h1>
      </div>
      <div className="flex mx-5 mt-5 items-center">
        <AudiLogo />
        <h1 className="ml-2 text-lg font-bold">Audi</h1>
      </div>
      <div className="flex mx-5 mt-5 mb-5 items-center">
        <TeslaLogo />
        <h1 className="ml-2 text-lg font-bold">Tesla</h1>
      </div>
    </div>
  );
};

export default Sidebar;
