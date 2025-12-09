import { Dayjs } from "dayjs";

export interface ShippingMethod {
  id: number;
  price: string;
  description: string;
  getCalculatedDate: () => Dayjs | null | undefined;
  isDatePicker: boolean;
  deliveryDate?: Dayjs | null;
}
