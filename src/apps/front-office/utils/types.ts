export type LocaleValue = {
  localeCode: string;
  value: string;
};

export type Category = {
  id: number;
  name: string;
  slug?: string;
  products?: Product[];
  image?: Image;
};

export type Module = {
  id: number;
  isActive: boolean;
  type: string;
  name: string;
  title: string;
  shortDescription: string;
  categories: Category[];
  products: Product[];
  slider?: Slide;
  banner?: Banner;
};

export type Slide = {
  banners: Banner[];
  id: string;
  isActive: boolean;
  name: string;
  title: string;
};

export type Banner = {
  id: string;
  name: string;
  isActive: boolean;
  title: string;
  image: Image;
  type: string;
};

export type Column = {
  id: number;
  isActive: boolean;
  module: Module;
  style: {
    size: {
      default: string;
    };
  };
};
export type Row = {
  columns: Column[];
};

export type Meta = {
  appendAppName: boolean;
};

export type Image = {
  extension: string;
  hash: string;
  height: number;
  id: string;
  mimeType: string;
  name: string;
  path: string;
  size: number;
  url: string;
  width: number;
};

export type UpdatedAt = {
  format: string;
  timestamp: number;
  offset: number;
  humanTime: string;
  text: string;
  date: string;
};

export type CreatedBy = {
  id: number;
  isCustomer: boolean;
  name: string;
  phoneNumber: string;
  email: string;
  userType: string;
  totalWishlist: number;
  totalCompare: number;
};

export type UpdatedBy = {
  id: number;
  isCustomer: boolean;
  name: string;
  phoneNumber: string;
  email: string;
  userType: string;
  totalWishlist: number;
  totalCompare: number;
};

export type Discount = {
  percentage: number;
  amount: number;
};

export type Product = {
  id: number;
  category: Category;
  description: string;
  discount: Discount;
  hasDiscount: boolean;
  images: Image[];
  inCart: boolean;
  inCompare: boolean;
  inStock: boolean;
  stock?: { available: number };
  inWishlist: boolean;
  isActive: boolean;
  isLowStock: boolean;
  name: string;
  price: number;
  purchase: {
    minQuantity: number;
  };
  salePrice: number;
  shortDescription: string;
  slug: string;
  sortOrder: number;
  type: string;
  rating: number;
  timeCards?: {
    time: number;
    type: string;
  }[];
};

export type SliderData = {
  categories: Category[];
  sectionTitle: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
};

export type ContactInfo = {
  address: string;
  email: string;
  phoneNumber: string;
  workingDays: string;
};

// Define the type for the footerData state

export type FooterData = {
  contact?: ContactInfo;
  logoUrl?: string;
};

export type DealsData = {
  images: Image;
  price: number;
  salePrice: number;
  name: string;
  rating: number;
  timeCards?: {
    time: number;
    type: string;
  }[];
};

export type PaginationInfo = {
  limit: number;
  page: number;
  total: number;
  pages: number;
  results: number;
};
