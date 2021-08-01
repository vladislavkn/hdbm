/* Types */

export type ID = string | number;

export type Hotel = {
  title: string;
  id: ID;
};

export type DateRange = {
  startDate: Date;
  endDate: Date;
  key?: string;
};

export type DialogProps = {
  onClose: () => void;
  isOpen: boolean;
};

/* Utils */

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
