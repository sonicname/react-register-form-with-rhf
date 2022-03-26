import React from "react";
import { useController } from "react-hook-form";

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <label className="cursor-pointer custom-radio">
      <input className="hidden" type="radio" {...field} />
      <div className="bg-white w-full h-full rounded-full" />
    </label>
  );
};

export default RadioHook;
