export type Image = {
  hash: string;
  url: string;
  name: string;
};

export type ProductCategory = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  brand: string;
  shortDescription: string;
  description: string;
  image: Image;
  price: number;
  totalPrice: number;
  salePrice?: number;
  category: ProductCategory;
  isFavorite: boolean;
  rating: number;
  reviews: number;
  totalReviews: number;
  maxAmountPerOrder?: number;
};
