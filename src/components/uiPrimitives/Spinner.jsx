import React from "react";
import { Oval } from "react-loader-spinner";

function Spinner() {
  return (
    <Oval
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      strokeWidth="4"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
export { Spinner };
