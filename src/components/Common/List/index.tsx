// ========== components ========== \\
import Item from "./Item";

const List: React.FC<any> = ({brands}): JSX.Element => {
  return (
    <div className="overflow-y-auto">
      {brands?.map((brand: any) => {
        return <Item key={brand.id} {...brand} />;
      })}
    </div>
  );
};

export default List;