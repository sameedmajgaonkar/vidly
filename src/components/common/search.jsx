import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onChange(e.currentTarget.value)}
        className="form-control"
        name="query"
        value={value}
      />
    </div>
  );
};

export default SearchBox;
