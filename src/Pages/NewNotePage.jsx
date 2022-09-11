import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../data-resource/DATA';

function NewNotePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function onSubmit() {
    addNote({ title, body });
    navigate('/');
  }

  return (
    <section className="section">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">
            <h2>Create New Note</h2>
          </div>
        </div>
        <div className="card-content">
          <div className="content">
            <form onSubmit={onSubmit}>
              <div className="field">
                <label className="label">Write Title</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Write you Note</label>
                <textarea
                  className="textarea"
                  name="body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  required
                />
              </div>
              <input
                className="button is-success"
                type="submit"
                value="Create Note"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewNotePage;
