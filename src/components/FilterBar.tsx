import React from "react";
import SelectForm from "./SelectForm";
import DatePicker from "./DatePicker";

const FilterBar = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className=" col-span-1 grid grid-cols-7 gap-2">
        <div className=" col-span-2 ">
          <SelectForm />
        </div>
        <div className=" col-span-2 ">
          <SelectForm />
        </div>
        <div className=" col-span-2 ">
            <DatePicker/>
        </div>
        <div className=" col-span-1 "></div>
      </div>
      <div className=" col-span-1 "></div>
    </div>
  );
};

export default FilterBar;
