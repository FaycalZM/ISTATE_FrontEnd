import { useEffect } from "react";

export default function Input({ label, setValue, type, defaultValue }) {
  const changeValue = (event) => setValue(event.target.value);

  useEffect(() => setValue(defaultValue), [defaultValue]);

  return (
    <div className="flex flex-col items-start">
      <label className="md:text-lg">{label}</label>
      <input
        defaultValue={defaultValue ? defaultValue : null}
        onChange={changeValue}
        className="input-text w-full"
        type={type}
      />
    </div>
  );
}
