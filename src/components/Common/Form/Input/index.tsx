import { ChangeEvent } from "react";

interface IProps extends React.PropsWithChildren {
  inputValue?: string | number;
  name: string;
  type: "text" | "number" | "email" | "password" | "tel" | "hidden" | "file";
  placeholder?: string; 
  hidden?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
}

const Input: React.FC<IProps> = ({
  disabled = false,
  hidden = false,
  inputValue,
  name,
  type, 
  placeholder,
  onChange,
  className,
  children
}): JSX.Element => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <div className="relative w-full">
      <input
        disabled={disabled}
        hidden={hidden}
        value={inputValue}
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={handleChange}
        className={`${className}`}
      />
      {children}
    </div>
  );
};

export default Input;
