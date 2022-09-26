import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ToggleTheme from '../ThemeGroup/ToggleTheme';
import ToggleLocale from '../ThemeGroup/ToggleLocale';
import { LocaleConsumer } from '../../context/groupcontext/LocaleContext';

function Navigation({ isLogin, logout }) {
  const [isActiveClass, setIsActiveClass] = useState(false);
  function toggleBurgerMenu() {
    setIsActiveClass(!isActiveClass);
  }
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <nav
            className="navbar is-fixed-top is-primary"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="navbar-item" to="/submission-fundamentalreact-2">
                {locale === 'id' ? 'Single Page Apps' : 'Single Page Apps'}
              </Link>
              <button
                className={`navbar-burger ${isActiveClass ? 'is-active' : ''}`}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasic"
                onClick={toggleBurgerMenu}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div
              id="navbarBasic"
              className={`navbar-menu ${isActiveClass ? 'is-active' : ''}`}
            >
              <div className="navbar-start">
                <div className="navbar-item">
                  <ToggleTheme />
                </div>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <ToggleLocale />
                </div>
                {isLogin ? (
                  <>
                    <Link
                      className="navbar-item"
                      to="/submission-fundamentalreact-2/"
                    >
                      {locale === 'id' ? 'Beranda' : 'Homepage'}
                    </Link>
                    <Link
                      className="navbar-item"
                      to="/submission-fundamentalreact-2/notes/new"
                    >
                      {locale === 'id' ? 'Buat Catatan' : 'Create Note'}
                    </Link>
                    <Link
                      className="navbar-item"
                      to="/submission-fundamentalreact-2/notes/archived"
                    >
                      {locale === 'id' ? 'Diarsipkan' : 'Archived'}
                    </Link>
                    <div className="navbar-item">
                      <button className="button is-danger" onClick={logout}>
                        {locale === 'id' ? 'Keluar' : 'Logout'}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      className="navbar-item"
                      to="/submission-fundamentalreact-2"
                    >
                      {locale === 'id' ? 'Masuk' : 'Login'}
                    </Link>
                    <Link
                      className="navbar-item"
                      to="/submission-fundamentalreact-2/register"
                    >
                      {locale === 'id' ? 'Daftar' : 'Register'}
                    </Link>
                  </>
                )}
              </div>
            </div>
          </nav>
        );
      }}
    </LocaleConsumer>
  );
}

Navigation.propTypes = {
  isLogin: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

export default Navigation;
