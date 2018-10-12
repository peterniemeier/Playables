import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, parseInt(e.currentTarget.value))
);

const FilterForm = ({ tags, updateFilter }) => (
  <div>
    <span className="filter">Tags:</span>
    <br/>
    <label>Select a tag</label>
    <input
      type="number"
      value={tags}
      onChange={handleChange('tags', updateFilter)}
    />
  </div>
);

export default FilterForm;
