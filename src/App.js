import { Routes, Route } from 'react-router-dom';
import Navigation from './components/ButtonNavigation/Navigation';
import NoteDetailPage from './Pages/NoteDetailPage';
import NewNotePage from './Pages/NewNotePage';
import NotFoundPage from './Pages/NotFoundPage';
import HomePage from './Pages/HomePage';
import ArchivePage from './Pages/ArchivePage';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/submission-fundamentalreact-1" element={<HomePage />} />
          <Route
            path="/submission-fundamentalreact-1/notes/archived"
            element={<ArchivePage />}
          />
          <Route
            path="/submission-fundamentalreact-1/notes/new"
            element={<NewNotePage />}
          />
          <Route
            path="/submission-fundamentalreact-1/notes/:id"
            element={<NoteDetailPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
