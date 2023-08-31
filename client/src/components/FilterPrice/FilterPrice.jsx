import React from "react";

const FilterPrice = ({ data, setSort, setMaxPrice }) => {
  const radios = [
    {
      id: 1,
      name: "$0 - $100",
    },
    {
      id: 2,
      name: "$100 - $500",
    },
    {
      id: 3,
      name: "$500 - $1000",
    },
  ];

  const handler = (event) => {
    const targetId = parseInt(event.target.id); // id'yi bir tamsayıya dönüştür

    switch (targetId) {
      case 1:
        setMaxPrice({ min: 0, max: 100 });
        break;
      case 2:
        setMaxPrice({ min: 101, max: 500 });
        break;
      case 3:
        setMaxPrice({ min: 501, max: 1000 });
        break;
      default:
        break;
    }

    //setSort(""); // Sıralamayı sıfırla veya uygun bir sıralama yapabilirsiniz.
  };

  return (
    <div className="flex flex-col gap-1 text-sm">
      {radios?.map((radio) => (
        <label htmlFor={radio.id} key={radio.id} className="flex gap-1">
          <input
            type="radio"
            name="price"
            id={radio.id.toString()} // id'yi bir dizeye dönüştür
            onChange={handler}
          />
          {radio.name}
        </label>
      ))}
    </div>
  );
};

export default FilterPrice;
