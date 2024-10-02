import React from "react";

const Price = ({ price }) => {
  return (
    <span>
      ${price.toFixed(2)} {/* Format price with a dollar sign and two decimal places */}
    </span>
  );
};

export default Price;
