import { useState } from "react";

export default function FilterSearch() {
  const [rangeValue, setRangeValue] = useState(0);
  const rangeChange = (event) => setRangeValue(event.target.value);

  return (
    <div className="space-y-4 md:space-y-8">
      <div className="flex justify-center gap-x-4">
        <input
          className="input-text w-full md:w-80"
          type="text"
          placeholder="Enter a keyword"
        />
        <button className="primary-btn-sm">Search</button>
      </div>
      <div className="flex items-center gap-x-4 my-6">
        <div className="w-full bg-gray-400 h-px" />
        <h3 className="text-gray-500 text-sm md:text-base">Filter</h3>
        <div className="w-full bg-gray-400 h-px" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-4">
        <select className="input-select col-span-1" name="sale">
          <option value="" selected disabled hidden>
            Sale
          </option>
          <option name="sale" value="value1">
            Value 1
          </option>
          <option name="sale" value="value2">
            Value 2
          </option>
        </select>
        <select className="input-select col-span-1" name="flat">
          <option value="" selected disabled hidden>
            Select room flat
          </option>
          <option name="flat" value="value1">
            Value 1
          </option>
          <option name="flat" value="value2">
            Value 2
          </option>
        </select>
        <select className="input-select col-span-1" name="location">
          <option value="" selected disabled hidden>
            Select location
          </option>
          <option name="location" value="value1">
            Value 1
          </option>
          <option name="location" value="value2">
            Value 2
          </option>
        </select>
        <select className="input-select col-span-1" name="expensive">
          <option value="" selected disabled hidden>
            Most expensive
          </option>
          <option name="expensive" value="value1">
            Value 1
          </option>
          <option name="expensive" value="value2">
            Value 2
          </option>
        </select>
      </div>
      <div className="flex items-center justify-center gap-x-2 flex-col md:flex-row gap-y-2">
        <span className="text-blue font-semibold">0 DA</span>
        <input
          type="range"
          className="w-full md:w-80 h-2 cursor-pointer appearance-none bg-hover rounded-full"
          min={0}
          max={100000000}
          onChange={rangeChange}
        />
        <span className="text-blue font-semibold w-28">{rangeValue} DA</span>
      </div>
    </div>
  );
}
