export interface Item {
  title: string;
  variant: string;
  price: number;
  image: string;
  image2: string;
  quantity: number;
  discount_percent?: number;
}

export interface OrderData {
  token: string;
  original_total_price: number;
  total_price: number;
  total_discount: number;
  total_weight: number;
  item_count: number;
  items: Item[];
}

export interface HomeData {
  id: number;
  img: string;
  heading: string;
  para: string;
  btn: string;
}


export interface ReviewDataType{
  title:string;
  review:string;
  name:string;
  role:string
}