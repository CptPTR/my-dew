import React, {useState} from "react";

import "./../resources/css/Shipping.css";

function Shipping(props) {
  const [hidden] = useState(false);

  if (!hidden) {
    return (
      <div className={"shipping"}>
        <p>free or reduced shipping cost to all Europe</p>
      </div>
    );
  } else {
    return null;
  }
}

export default Shipping;
