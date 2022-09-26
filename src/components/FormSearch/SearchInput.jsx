import React from 'react';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../../context/groupcontext/LocaleContext';

function SearchInput({ keyword, keywordChange }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <input
            className="input"
            type="text"
            placeholder={locale === 'id' ? 'Cari catatan' : 'Find Note'}
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)}
          />
        );
      }}
    </LocaleConsumer>
  );
}

SearchInput.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchInput;
