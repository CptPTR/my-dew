import { useState } from "react";

import "./../resources/css/Shipping.css";

const Shipping = () => {
  const [isHidden, setHidden] = useState(true);

  return (
    <>
      {isHidden && (
        <div className={"shipping"}>
          <p>free or reduced shipping cost to all Europe</p>
        </div>
      )}
    </>
  );
};

export default Shipping;
