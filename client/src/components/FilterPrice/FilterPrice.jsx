import React from "react";

const FilterPrice = ({ setMaxPrice, setMinPrice }) => {
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
        setMinPrice(0);
        setMaxPrice(100);
        break;
      case 2:
        setMinPrice(101);
        setMaxPrice(500);
        break;
      case 3:
        setMinPrice(501);
        setMaxPrice(1000);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col gap-1 text-sm">
      {radios?.map((radio) => (
        <label htmlFor={radio.id} key={radio.id} className="flex gap-1">
          <input type="radio" name="price" id={radio.id} onChange={handler} />
          {radio.name}
        </label>
      ))}
    </div>
  );
};

export default FilterPrice;
