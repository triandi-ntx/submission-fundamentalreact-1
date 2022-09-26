import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/ButtonLogin/LoginInput';
import { login } from '../data-resource/NETWORK-DATA';
import { LocaleConsumer } from '../context/groupcontext/LocaleContext';

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="section">
            <div className="box">
              <h2 className="title">
                {locale === 'id'
                  ? 'Silakan masuk untuk melanjutkan ...'
                  : 'Please Login ...'}
              </h2>
              <LoginInput login={onLogin} />
              <p>
                {locale === 'id'
                  ? 'Belum punya akun? '
                  : `Don't have an account? `}
                <Link to="/submission-fundamentalreact-2/register">
                  {locale === 'id' ? 'Daftar di sini.' : 'Register here.'}
                </Link>
              </p>
            </div>
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
