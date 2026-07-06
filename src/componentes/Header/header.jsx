import styles from './header.module.css';
import Menu from './Menu/menu';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <Menu />
    </header>
  );
}

export default Header;