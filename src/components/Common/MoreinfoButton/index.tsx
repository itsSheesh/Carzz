// ========== packages ========== \\
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// ========== icons ========== \\
import LeftArrow from "../Icons/LeftArrow";

const MoreinfoButton: React.FC = (): JSX.Element => {
  const randomId = uuidv4();
  return (
    <Link to={`/${randomId}`}>
      <button className="flex p-2 border rounded-md bg-white text-[#684FAE]">
        <LeftArrow />
        <p className="font-bold">MORE DETAILS</p>
      </button>
    </Link>
  );
};

export default MoreinfoButton;
