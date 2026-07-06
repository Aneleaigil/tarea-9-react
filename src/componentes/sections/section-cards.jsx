import styles from './sections.module.css';
import card1_icon from '@/assets/imagenes/icon-cloud.svg';
import card1_img from '@/assets/imagenes/Interfaz digital.png';
import card2_icon from '@/assets/imagenes/icon-grass.svg';
import card2_img from '@/assets/imagenes/Detalle del suelo.png';
import card3_icon from '@/assets/imagenes/icon-waves.svg';
import card3_img from '@/assets/imagenes/Gotas de agua.png';

function SectionCards() {

  const headerCards = {
    titulo: <h2 className={styles.headerCards}>Nuestro sistema esta pensando para ayudarte a mantener un lindo jardin</h2>,
    texto: <p className={styles.textoCards}>Tres pilares del sistema diseñados para brindarle un control absoluto sobre tu jardin.</p>
  };

  const dataCard = [
    {
      imagenIcono: card1_icon,
      imagenCard: card1_img,
      tituloCard: <h3 className={styles.cardTitle}>Análisis del suelo</h3>,
      textoCard: <p className={styles.cardText}>Monitorea los niveles de tu pH y nutrientes en tiempo real.</p>,
    },
    {
      imagenIcono: card2_icon,
      imagenCard: card2_img,
      tituloCard: <h3 className={styles.cardTitle}>Sincronización climática</h3>,
      textoCard: <p className={styles.cardText}>Adapta los programas de riego según la humedad y el calor en tiempo real.</p>,
    },
    {
      imagenIcono: card3_icon,
      imagenCard: card3_img,
      tituloCard: <h3 className={styles.cardTitle}>Sincronización Climatica</h3>,
      textoCard: <p className={styles.cardText}>Adapta los programas de riego según la humedad y el calor en tiempo real.</p>,
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.featuresHeader}>
        {headerCards.titulo}
        {headerCards.texto}
      </div>

      <div className={styles.featuresGrid}>
        {dataCard.map((card, index) => (
          <div key={index} className={styles.card}>
            <img src={card.imagenIcono} alt="ícono" className={styles.cardIcon} />
            <img src={card.imagenCard} alt="imagen card" className={styles.cardImg} />
            {card.tituloCard}
            {card.textoCard}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionCards;