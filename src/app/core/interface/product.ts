export interface Product {
  title: string;
  price: number;
  imageCover: string;
  category: Category;
  ratingsAverage: number;
  _id?: string;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
