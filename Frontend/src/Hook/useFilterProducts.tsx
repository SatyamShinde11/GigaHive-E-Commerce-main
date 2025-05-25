import { useEffect, useState } from "react";
import type { TItem, TOrderData } from "../types/types";
import { ProductData } from "../Pages/home/data";

const useFilterProducts = () => {
  const [allProducts, setAllProducts] = useState<TItem[]>([]);
  const [productShowData, setProductShowData] = useState<TItem[]>([]);
  const [filterValueArr, setFilterValueArr] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ from: "", to: "" });

  const [openSection, setOpenSection] = useState<Record<number, boolean>>({});


  useEffect(() => {
    const allItems: TItem[] = ProductData.flatMap(
      (order: TOrderData) => order.items
    );

    setProductShowData(allItems);
    setAllProducts(allItems);
  }, []);

  const handleClickFilterValue = (value: string, checked: boolean) => {
    console.log(value, checked);
    if (!value) return;

    setFilterValueArr((prev) => {
      if (checked) {
        if (!prev.includes(value)) {
          return [...prev, value];
        }
        return prev;
      } else {
        return prev.filter((item) => item !== value);
      }
    });
  };

  const handleFilterPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (filterValueArr.length === 0 && !priceRange.from && !priceRange.to) {
      setProductShowData(allProducts);
      return;
    }
    const filterDatas = allProducts.filter((items: TItem) => {
      return filterValueArr.some(
        (value) =>
          items.title === value ||
          items.color === value ||
          items.size === value ||
          items.stock === value ||
          items.brand === value
      );
    });
    setProductShowData(filterDatas);
  }, [filterValueArr, priceRange, allProducts]);

    const handleToggle = (id: number) => {
    setOpenSection((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleClearFilterValue = () => {
    setFilterValueArr([]);
    setOpenSection((prev) => {
      const newState: Record<number, boolean> = {};
      for (const key in prev) {
        newState[key] = false;
      }
      return newState;
    });
  };

  return {
    allProducts,
    setAllProducts,
    productShowData,
    filterValueArr,
    setFilterValueArr,
    priceRange,
    setPriceRange,
    handleClickFilterValue,
    handleFilterPrice,
    openSection, 

    handleToggle,
    handleClearFilterValue,
  };
};

export default useFilterProducts;
