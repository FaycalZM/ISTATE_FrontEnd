export default function TextArea({ label, setValue, rows }) {
  const changeValue = (event) => setValue(event.target.value);

  return (
    <div className="flex flex-col items-start">
      <label className="text-sm md:text-lg">{label}</label>
      <textarea
        rows={rows}
        onChange={changeValue}
        className={`input-text w-full`}
      />
    </div>
  );
}
