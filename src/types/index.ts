import { ReactNode } from 'react';

export type fetchType = (search: string) => void;

export interface ListItemProps {
  text: string;
  customElement?: ReactNode;
  customClass?: string;
  style?: React.CSSProperties;
}

export interface Settings {
  variants: ListItemProps[];
  customFetch?: fetchType;
}
