import { useEffect } from "react";
import { useRef } from "react";

export default function Select({ label, values, setValue }) {
  const ref = useRef(null);

  useEffect(() => setValue(ref.current.value), []);

  const changeValue = (event) => setValue(event.target.value);

  return (
    <div className="flex flex-col items-start">
      <label className="md:text-lg">{label}</label>
      <select className="input-select w-full" onChange={changeValue} ref={ref}>
        {values.map((value, index) => {
          return (
            <option value={value} key={index}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
}
