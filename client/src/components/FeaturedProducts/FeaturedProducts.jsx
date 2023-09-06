import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="max-w-full space-y-10 mx-20 text-sm my-24 text-center md:text-start">
      <div>
        <h1 className="text-3xl font-bold">{type} Products</h1>
      </div>
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} type={type} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
