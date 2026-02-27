import { DropdownItemProps } from "./dropdown.types.ts";
import { useId } from "react";

const DropdownItem = ({ item, value, onChange }: DropdownItemProps) => {
  const id = useId();

  const handleChange = () => {
    onChange(item);
  };

  return (
    <label className="option">
      <span></span>
      <input
        type="radio"
        id={id}
        checked={item === value}
        onChange={handleChange}
      />
      <p>{item}</p>
    </label>
  );
};

export default DropdownItem;
