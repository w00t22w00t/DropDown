import React, { FC, ReactNode } from 'react';

interface ListItemProps {
  value: string;
  customClass?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}

const ListItem: FC<ListItemProps> = ({ value, customClass, style, children }) => {
  return (
    <li className={customClass} style={style}>
      <button>{value}</button>
      {children}
    </li>
  );
};

export default ListItem;
