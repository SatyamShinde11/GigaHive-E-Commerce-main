
const options = [
  "Best selling",
  "Featured",
  "Alphabetically, A-Z",
  "Alphabetically, Z-A",
  "Price, low to high",
  "Price, high to low",
  "Date, old to new",
  "Date, new to old",
];

const SortByDropdown = () => (
  <select className="outline-none p-1 text-xs">
    {options.map((label, idx) => (
      <option key={idx} value={label}>
        {label}
      </option>
    ))}
  </select>
);

export default SortByDropdown;
