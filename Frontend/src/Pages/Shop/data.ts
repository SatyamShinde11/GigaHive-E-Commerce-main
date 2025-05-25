import type { TFilterData } from "../../types/types";
import { ProductData } from "../home/data";

export const filterData: TFilterData[] = [
  {
    title: "Availability",
    id: 1,
    options: [
      { label: "In stock", count: 5 },
      {
        label: "Out of stock",
        count: 0,
      },
    ],
  },
  {
    title: "Color",
    id: 2,
    options: [
      { label: "White", count: 5 },
      { label: "Black", count: 5 },
      { label: "Blue", count: 5 },
      { label: "Yellow", count: 5 },
    ],
  },
  {
    title: "Size",
    id: 3,
    options: [
      { label: "Small", count: 5 },
      { label: "Medium", count: 5 },
      { label: "Large", count: 5 },
    ],
  },
  {
    title: "Brand",
    id: 4,
    options: [
      { label: "Foesta-demo", count: 5 },
      { label: "parthers-demo", count: 5 },
    ],
  },
  {
    title: "Price",
    id: 5,
    type: "price",
  },
];
