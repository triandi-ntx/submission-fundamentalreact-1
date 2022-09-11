import React from 'react';
import PropTypes from 'prop-types';

function SearchInput({ keyword, keywordChange }) {
  return (
    <input
      className="input"
      type="text"
      placeholder="Find Note Tittle"
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
}

SearchInput.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchInput;
