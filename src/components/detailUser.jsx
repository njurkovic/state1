import React from "react";

function detailUser({ marka, tip, godište }) {
  return (
    <>
      Marka vozila:{marka}, tip: {tip}, godište:{godište}
    </>
  );
}

export default detailUser;
