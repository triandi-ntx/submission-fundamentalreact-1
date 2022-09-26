import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/FormRegister/RegisterInput';
import { register } from '../data-resource/NETWORK-DATA';
import { LocaleConsumer } from '../context/groupcontext/LocaleContext';

function RegisterPage() {
  const navigate = useNavigate();
  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="section">
            <div className="box">
              <h2 className="title">
                {locale === 'id' ? 'register di sini ...' : 'Register here ...'}
              </h2>
              <RegisterInput register={onRegisterHandler} />
              <p>
                {locale === 'id' ? 'Kembali ke' : 'Back to'}{' '}
                <Link to="/submission-fundamentalreact-2">
                  {locale === 'id' ? 'Masuk' : 'Login'}
                </Link>
              </p>
            </div>
          </section>
        );
      }}
    </LocaleConsumer>
  );
}

export default RegisterPage;
