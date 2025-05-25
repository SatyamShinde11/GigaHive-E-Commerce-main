import type { TItem } from "../../../types/types";
import Card from "../../../Components/Card";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";
import { filterData } from "../data";
import useFilterProducts from "../../../Hook/useFilterProducts";
import { Link } from "react-router-dom";
const FilterAndProduct = ({
  openFilterPopUp,
  toggleFilterPopUp,
}: {
  openFilterPopUp: boolean;
  toggleFilterPopUp: () => void;
}) => {
  const {
    productShowData,
    filterValueArr,
    priceRange,
    handleClickFilterValue,
    handleFilterPrice,
    openSection,
    handleToggle,
    handleClearFilterValue,
  } = useFilterProducts();

  return (
    <>
      <div className="flex w-full gap-10 relative ">
        <div
          className={
            openFilterPopUp
              ? "fixed z-50 top-0 w-[80%] overflow-auto right-0 h-screen bg-white px-5 py-10 flex flex-col gap-5   "
              : "w-1/3 md:relative md:flex hidden absolute top-0  flex-col gap-5"
          }
        >
          <div className="text-sm w-full">
            <span
              onClick={handleClearFilterValue}
              className=" cursor-pointer hover:underline text-sm  "
            >
              Remove All
            </span>
            <MdClose
              onClick={toggleFilterPopUp}
              className=" md:hidden flex cursor-pointer hover:underline w-6 h-6 absolute right-5 top-5"
            />
            <div className="w-full text-xs flex flex-wrap gap-2">
              {filterValueArr.map((items: string, index: number) => {
                return (
                  <p
                    key={index}
                    className=" cursor-pointer hover:underline border border-gray-200 py-1 px-2 rounded-md  "
                  >
                    {items}
                  </p>
                );
              })}
            </div>
          </div>

          {filterData.map((items, index) => {
            return (
              <div key={+index} className="border border-gray-200 rounded-md ">
                <h1
                  onClick={() => handleToggle(items.id)}
                  className="flex justify-between p-4 md:p-2 bg-gray-200 rounded-t-md items-center text-xs cursor-pointer hover:underline  "
                >
                  {items.title}{" "}
                  <MdKeyboardArrowDown className="cursor-pointer text-sm " />{" "}
                </h1>

                {openSection[items.id] && (
                  <div className="text-xs  flex flex-col justify-between p-2 ">
                    {items.type == "price" ? (
                      <div className="text-xs w-full gap-3 flex justify-between p-2 ">
                        <div className="w-1/2">
                          <span className="text-gray-600">From</span>
                          <input
                            type="number"
                            name="from"
                            value={priceRange.from}
                            onChange={handleFilterPrice}
                            className="outline-none px-2 w-full border border-gray-200 rounded-md h-8"
                          />
                        </div>
                        -{" "}
                        <div className="w-1/2">
                          <span className="text-gray-600">To</span>
                          <input
                            type="number"
                            name="to"
                            value={priceRange.to}
                            onChange={handleFilterPrice}
                            className="outline-none px-2 w-full border border-gray-200 rounded-md h-8"
                          />
                        </div>
                      </div>
                    ) : (
                      items.options?.map((option, i) => (
                        <div
                          className={`flex justify-between text-xs p-2 ${
                            option?.count === 0 &&
                            " text-gray-400 cursor-not-allowed "
                          }  `}
                          key={`${option.label}-${i}`}
                        >
                          <label
                            className={`flex gap-2 `}
                            htmlFor={`${option.label}-${i}`}
                          >
                            <input
                              type="checkbox"
                              id={`${option.label}-${i}`}
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) => {
                                handleClickFilterValue(
                                  option?.label,
                                  e.target.checked
                                );
                              }}
                              disabled={option.count === 0}
                            />
                            <span className="text-gray-600">
                              {option.label}
                            </span>
                          </label>
                          <span>({option.count})</span>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            );
          })}

          <h1
            onClick={toggleFilterPopUp}
            className=" md:hidden flex hover:underline border border-gray-200 py-1 text-xs  px-4 rounded-md w-min  cursor-pointer hover:bg-gray-200 transition duration-300 "
          >
            Apply
          </h1>
        </div>

        <div className="flex flex-wrap justify-center w-full gap-5 ">
          {productShowData.map((items: TItem, index: number) => (
            <Link
              state={{ product: items, from: "shop" }}
              to={`/shop/product`}
              className="relative"
              key={items.title + index}
            >
              <Card items={items} key={index} ShowExtraAction={true} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterAndProduct;
