// ========== packages ========== \\
import { createContext, useState } from "react";

type ContextType = {
  sidebar: boolean;
  toggleShow: () => void;
};

const initValue = {
  sidebar: false,
  toggleShow: () => {},
};

export const Context = createContext<ContextType>(initValue);

interface IProps extends React.PropsWithChildren {}

const AppContext: React.FC<IProps> = ({ children }): JSX.Element => {
  const [sidebar, setSidebar] = useState(initValue.sidebar);

  const toggleShow = () => {
    setSidebar(!sidebar);
  };

  return (
    <Context.Provider value={{ sidebar, toggleShow }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
