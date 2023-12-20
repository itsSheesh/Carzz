// ========== components ========== \\
import Item from "./Item";

interface ListProps {
  brands: any[];
  onBrandSelect: (brandName: string) => void;
}
const List: React.FC<ListProps> = ({ brands, onBrandSelect }): JSX.Element => {
  return (
    <div className="overflow-y-auto">
      {brands?.map((brand: any) => (
        <Item
          key={brand.id}
          {...brand}
          onClick={() => onBrandSelect(brand.name)}
        />
      ))}
    </div>
  );
};

export default List;
