import React from 'react';

import FilterForm from './filter_form';
import ProjectIndex from './project_index';


const Search = ({ benches, tags, updateFilter }) => (
  <div className="user-pane">
      <FilterForm />

    <ProjectIndex projects={projects} />

  </div>
);

export default Search;
