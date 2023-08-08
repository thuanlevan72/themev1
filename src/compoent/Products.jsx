import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import ProductItem from "./ProductItem";
import Pagination from "./Pagination";

function Products() {
  return (
    <>
      <div className="focus:outline-none bg-[#a7a5a51d]">
        {/* Remove py-8 */}
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-center justify-center gap-10 lg:justify-start">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
        <Pagination />
      </div>
    </>
  );
}

export default Products;
