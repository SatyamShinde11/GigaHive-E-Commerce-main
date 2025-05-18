export interface TItem {
  title: string;
  variant: string;
  price: number;
  image: string;
  image2: string;
  quantity: number;
  discount_percent?: number;
}

export interface TOrderData {
  token: string;
  original_total_price: number;
  total_price: number;
  total_discount: number;
  total_weight: number;
  item_count: number;
  items: TItem[];
}

export interface THomeData {
  id: number;
  img: string;
  heading: string;
  para: string;
  btn: string;
}


export interface TReviewData{
  title:string;
  review:string;
  name:string;
  role:string
}

export interface TBrandImg{
  BrandImg:string
}