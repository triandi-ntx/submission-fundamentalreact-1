import { ThemeConsumer } from '../../context/groupcontext/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <button className="button is-primary" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        );
      }}
    </ThemeConsumer>
  );
}

export default ToggleTheme;
