import { useState } from 'react';
import styles from './footer.module.css';

function Footer () {
  
    return (
     <footer className={styles.footer}>
      <div className={styles.footer_nav}>
        <ul className={styles.footer__links}>
        <li className={styles.footer__link_item}><a href="#" className={styles.footer__link}>Contacto</a></li>
        <li className={styles.footer__link_item}><a href="#" className={styles.footer__link}>Privacidad</a></li>
        <li className={styles.footer__link_item}><a href="#" className={styles.footer__link}>Términos de uso</a></li>
        <li className={styles.footer__link_item}><a href="#" className={styles.footer__link}>Tienda</a></li>
        </ul>
        </div>

        <div className={styles.footer__bottom}>
        <p className={styles.footer__copyright}>© 2024 JardinSmart. Todos los derechos reservados.</p>
        </div>
        </footer>
    );
  }
  
  export default Footer;
  
  
  
  
  

