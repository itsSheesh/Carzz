/* eslint-disable @typescript-eslint/no-unused-vars */
// ========== packages ========== \\
import { createContext, useState } from "react";

interface DarkProp {
  isDark: boolean;
  handleDark: () => void;
}
const initValue = {
  isDark: false,
  handleDark: () => {},
};
export const DarkModeContext = createContext<DarkProp>(initValue);

interface IProps extends React.PropsWithChildren {}

const DarkModeContextProvider: React.FC<IProps> = ({ children }): JSX.Element => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleDark = () => {
    setIsDark(!isDark);
  };

  return (
    <DarkModeContext.Provider value={{ isDark, handleDark }}>
      {children}
    </DarkModeContext.Provider>
  );
};
export default DarkModeContextProvider;
