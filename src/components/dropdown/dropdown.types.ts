export type DropdownProps = {
  title: string;
  values: string[];
  defaultValue: string;
};

export type DropdownItemProps = {
  item: string;
  value: string;
  onChange: (item: string) => void;
};
