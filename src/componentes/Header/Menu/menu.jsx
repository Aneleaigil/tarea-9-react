import { useState } from 'react';
import styles from './Menu.module.css';
import logo from '@/assets/imagenes/logo.svg';



function Menu() {
  const [abierto, setAbierto] = useState(false);

  return (
    <nav className={styles.menu}>
      <div className={styles.logo}>
        <img src={logo} alt="logo del sitio"/>
        </div>

      <button className={styles.menu_toggle} onClick={() => setAbierto(!abierto)}>
      <span className="material-symbols-outlined">menu</span>
        {abierto} 
      </button>

      <ul className={`${styles.menu_list} ${abierto ? styles.listOpen : ''}`}>
        <li><a href="#">Nuestros servicios</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Tienda</a></li>
        <li><a href="#">Aplicación</a></li>
      </ul>
    </nav>
  );
}

export default Menu;




