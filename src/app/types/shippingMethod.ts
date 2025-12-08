export interface ShippingMethod {
  id: number;
  price: string;
  description: string;
  getCalculatedDate: () => Date | null | undefined;
  isDatePicker: boolean;
  deliveryDate?: Date | null;
}
