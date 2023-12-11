interface IProps {
  id: number;
  name: string;
  onClickHandler: (id: number) => void;
}

const Item: React.FC<IProps> = ({ id, name, onClickHandler }): JSX.Element => {
  return (
    <div data-testid="Model-item" className="cursor-pointer" key={id} onClick={() => onClickHandler(id)}>
      {name}
    </div>
  );
};

export default Item;
