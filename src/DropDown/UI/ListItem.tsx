import React, { FC, ReactNode } from 'react';

interface ListItemProps {
  value: string;
  customClass?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  handler: (e: any) => void;
}

const ListItem: FC<ListItemProps> = ({ value, customClass, style, handler, children }) => {
  return (
    <li className={customClass} style={style}>
      <button onClick={(e) => handler(e)}>{value}</button>
      {children}
    </li>
  );
};

export default ListItem;
