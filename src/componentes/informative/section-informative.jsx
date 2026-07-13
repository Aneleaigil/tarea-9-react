import styles from './informative.module.css';
import image_Informative from '@/assets/imagenes/control de humedad.png';
import badgeCard from '@/assets/imagenes/icon-temp.png';
import baggeCard2 from '@/assets/imagenes/icon-analisis.png';

function SectionInformative() {
    const imageSection = { image_Informative, badgeCard, baggeCard2 }; 

  const dataBadge = [
    {
      imagenIcono: badgeCard,
      tituloCard: <p className={styles.badgesTitle}>Análisis del suelo</p>,
      textoCard: <p className={styles.badgesText}>Monitorea los niveles de tu pH y nutrientes en tiempo real.</p>,
    },
    {
      imagenIcono: baggeCard2,
      tituloCard: <p className={styles.badgesTitle}>Sincronización climática</p>,
      textoCard: <p className={styles.badgesText}>Adapta los programas de riego según la humedad y el calor en tiempo real.</p>,
    },
  
  ];
    
    return (
        <section className={styles.informative}>
        <div className={styles.informativeContainer}><img src= {imageSection.image_Informative} className={styles.informativeImage}/></div>
            <article className={styles.informativeCard}>
                <div className={styles.informativeText}>
                    <h3 className={styles.informativeTitle}>Precisión inteligente para tu jardín</h3>
                    <p className={styles.informativeDescription}>Nuestra tecnología principal sincroniza los datos del microclima local con el análisis del suelo en tiempo real. Se acabaron las conjeturas: solo hidratación optimizada científicamente.</p>
                </div>

            <div className={styles.badges}>
            {dataBadge.map((badge, index) => (
                <div key={index} className={styles.badgesCard}>
                    <div className={styles.badgesHeaderCard}>
                        <img src={badge.imagenIcono} alt="icono" className={styles.badgesIcon} />
                        {badge.tituloCard}
                        {badge.textoCard}
                </div>
                    </div>

            ))}
            </div>
            </article>

        </section>

        );
}

export default SectionInformative;

