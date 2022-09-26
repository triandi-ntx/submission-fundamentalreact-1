import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useInput from '../hooks/useinput/useInput';
import { LocaleConsumer } from '../context/groupcontext/LocaleContext';
import { addNote } from '../data-resource/NETWORK-DATA';

function NewNotePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useInput('');
  const [body, setBody] = useInput('');
  const [isSubmitting, setSubmitting] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    const { error } = await addNote({ title, body });
    if (!error) {
      navigate('/');
    } else {
      setSubmitting(false);
    }
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="section">
            <div className="card">
              <div className="card-header">
                <div className="card-header-title">
                  <h2>
                    {locale === 'id' ? 'Buat Catatan Baru' : 'Create New Note'}
                  </h2>
                </div>
              </div>
              <div className="card-content">
                <div className="content">
                  <form onSubmit={onSubmit}>
                    <div className="field">
                      <label className="label">
                        {locale === 'id' ? 'Tulis Judul' : 'Write Title'}
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="title"
                          value={title}
                          onChange={setTitle}
                          required
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">
                        {locale === 'id'
                          ? 'Tulis Catatan Kamu'
                          : 'Write you Note'}
                      </label>
                      <textarea
                        className="textarea"
                        name="body"
                        value={body}
                        onChange={setBody}
                        required
                      />
                    </div>
                    <button
                      className={
                        isSubmitting
                          ? `button is-success is-loading is-disabled`
                          : `button is-success`
                      }
                      type="submit"
                    >
                      {locale === 'id' ? 'Buat Catatan' : 'Create Note'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

export default NewNotePage;
