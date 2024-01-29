export interface IProps extends React.PropsWithChildren {
  inputValue?: string | number;
  name: string;
  type: "text" | "number" | "email" | "password" | "tel" | "hidden" | "file";
  placeholder?: string;
  hidden?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
}
