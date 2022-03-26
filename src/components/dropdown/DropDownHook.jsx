import React from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import { useWatch } from "react-hook-form";

const DropDownHook = ({
  control,
  setValue,
  name,
  data,
  dropdownLabel = "Select your job",
  ...props
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();

  const [label, setLabel] = React.useState(dropdownLabel);

  useWatch({
    control,
    name: "job",
    defaultValue: "",
  });

  const handleClickDropDownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setLabel(e.target.textContent);
    setShow(false);
  };

  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-5 rounded-lg border border-gray-100 bg-white flex items-center justify-between cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span>{label || "Select your job"}</span>
      </div>

      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        {data.map((item) => (
          <div
            className="p-5 cursor-pointer hover:bg-gray-100"
            onClick={handleClickDropDownItem}
            data-value={item.value}
            key={item.id}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDownHook;
