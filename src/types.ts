export type Item = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type CartItemType = {
  id: number;
  qty: number;
  title: string;
  image: string;
  price: number;
};
