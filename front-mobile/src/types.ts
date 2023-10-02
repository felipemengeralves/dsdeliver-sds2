export type Order = {
  id: number;
  address: string;
  latitude: number;
  longitude: number;
  moment: string;
  total: number;
  status: string;
  products: Product[];
};

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUri: string;
};
