export interface Image {
  id: string;
  path: string;
}

export interface ColorImage {
  id: string;
  colorImagePath: string;
}

export interface Size {
  id: string;
  type: string;
  isHas: boolean;
}

export interface Product {
  id: string;
  type: string;
  gender: string;
  description: string;
  images: Image [];
  carAmount: number;
  singleAmount: number;
  priceTotal: number;
  favorite: boolean;
  colors: ColorImage [];
  sizes: Size [];
}
