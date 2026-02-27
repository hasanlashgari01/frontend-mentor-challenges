import { DropdownProps } from "./dropdown.types.ts";
import { useRef, useState } from "react";
import DropdownItem from "@/components/dropdown/dropdown-item.tsx";
import { ArrowDownIcon } from "@/components/icons/arrow-down.tsx";
import { cn } from "tailwind-variants";
import useClickOutside from "@/hooks/useClickOutside.tsx";

const Dropdown = ({ title, values, defaultValue }: DropdownProps) => {
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(dropdownRef, () => setOpen(false));

  const handleChangeItem = (item: string) => {
    setValue(item);
    setOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative items-center capitalize max-lg:flex-1 lg:flex"
    >
      <span className="text-neutral-400 capitalize max-lg:hidden">
        {title}:
      </span>
      <div
        className="flex w-full items-center justify-center gap-x-3 rounded-lg border-neutral-500 py-1.5 text-center max-lg:border lg:hidden"
        onClick={() => setOpen(!open)}
      >
        <button className="capitalize">{value}</button>
        <div
          className={cn(
            "transition-transform duration-200 ease-in-out lg:hidden",
            {
              "rotate-180": open,
            },
          )}
        >
          <ArrowDownIcon />
        </div>
      </div>

      <div
        className={cn("dropdown", {
          "max-lg:visible max-lg:opacity-100": open,
        })}
      >
        <div className="flex flex-col max-lg:divide-y max-lg:divide-neutral-500 lg:flex-row lg:gap-x-2">
          {values.map((item) => (
            <DropdownItem
              key={item}
              item={item}
              value={value}
              onChange={handleChangeItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
