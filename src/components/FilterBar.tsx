import React from "react";
import SelectForm from "./ControlledComponents/SelectForm";
import DatePicker from "./ControlledComponents/DatePicker";
import Duration from "./ControlledComponents/Duration";
import Text from "./UI/Text";
import TimePicker from "./ControlledComponents/TimePicker";

const FilterBar = () => {
  return (
    <div className="grid grid-cols-4 gap-4 border-y border-indigo-300 py-5 ">
      <div className=" col-span-3 grid grid-cols-10 gap-2">
        <div className=" col-span-2 ">
          <SelectForm />
        </div>
        <div className=" col-span-2 ">
          <SelectForm />
        </div>
        <div className=" col-span-2 ">
            <DatePicker/>
        </div>
        <div className=" col-span-1 ">
            <Duration/>
        </div>
        <div className=" col-span-1 ">
            <Duration/>
        </div>
        <div className=" col-span-2 ">
            <TimePicker/>
        </div>
      </div>
      <div className=" col-span-1 grid grid-cols-8 gap-2 ">
        <Text variant='bodyMd' className="col-span-1 pt-2 " >+</Text>
        <div className=" col-span-3 " >
        <Duration/>

        </div>
        <div className=" col-span-3 " >
        <Duration/>

        </div>
        <Text variant='bodyMd' className="col-span-1 pt-2 " >+</Text>

      </div>
    </div>
  );
};

export default FilterBar;
