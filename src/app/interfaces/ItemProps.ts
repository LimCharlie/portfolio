import { ReactNode } from "react";

export interface ItemProps {
  url?: string;
  content: string;
  index: number;
  icon: ReactNode;
  isSelected: boolean;
  onItemClick: (index: number) => void;
}
