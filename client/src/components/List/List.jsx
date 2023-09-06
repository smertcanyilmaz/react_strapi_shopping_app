import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ catId, maxPrice, sort, subCats, minPrice }) => {
  const { data, loading } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&[filters][price][$gte]=${minPrice}${
      sort ? `&sort=price:${sort}` : ""
    }`
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
