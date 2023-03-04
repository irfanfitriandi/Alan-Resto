import React from "react";
import ReactToPrint from "react-to-print";

type ButtonProps = {
  componentToPrint: React.MutableRefObject<any>;
};

const ButtonPrint = ({ componentToPrint }: ButtonProps) => {
  return (
    <>
      <ReactToPrint
        trigger={() => (
          <button className="w-1/2 text-white font-medium bg-[#7CB083] py-1 rounded-md">
            Print Bill
          </button>
        )}
        content={() => componentToPrint.current}
      ></ReactToPrint>
    </>
  );
};

export default ButtonPrint;
