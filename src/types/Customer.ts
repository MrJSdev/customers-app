
export type Customer = {
  customerID: string;
  companyName: string;
  contactName: string;
  contactTitle: string;
  status: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  phone: string;
  fax: string;
}

export type CustomerFilterValues = Record<keyof Partial<Customer>, string>

export interface CustomerFilterOption {
  label: string;
  key: keyof CustomerFilterValues;
  options?: string[];
  isDropdown?: boolean;
}
