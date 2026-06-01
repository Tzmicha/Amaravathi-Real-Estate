export default function SearchBar() {
  const filters = [
    [
      "Property Type",
      "All Types",
      "Plots",
      "Villas",
      "Apartments",
      "Commercial",
    ],
    ["Budget", "All Budgets", "Under 50L", "50L–1Cr", "1Cr–2Cr", "2Cr+"],
    ["Location", "Select Location", "Tadikonda", "Mangalagiri", "Guntur", "Vijayawada"],
    ["Purpose", "All Purpose", "Buy", "Invest", "Rent"],
  ];

  return (
    <div className="search-section">
      <div className="search-bar">
        {filters.map(([label, ...options]) => (
          <div className="s-field" key={label}>
            <label>{label}</label>
            <select>
              {options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
        <button
          className="btn-primary"
          style={{ alignSelf: "flex-end", padding: "10px 24px" }}
        >
          🔍 Search
        </button>
      </div>
    </div>
  );
}
