import PropTypes from 'prop-types';
import { LocaleConsumer } from '../../context/groupcontext/LocaleContext';

function NoteListEmpty({ isArchived }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div className="section">
            <div className="content">
              <h2>
                {isArchived
                  ? locale === 'id'
                    ? 'Arsip kosong'
                    : 'Empty Archived'
                  : locale === 'id'
                  ? 'Tidak ada catatan'
                  : 'Empty Note'}
              </h2>
            </div>
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

NoteListEmpty.propTypes = {
  isArchived: PropTypes.bool,
};

export default NoteListEmpty;
