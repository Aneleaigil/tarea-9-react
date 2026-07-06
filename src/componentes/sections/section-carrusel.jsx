import { useState } from 'react';
import styles from './sections.module.css';
import Slides0 from '@/assets/imagenes/HeroCarouselSection.png';
import Slides1 from '@/assets/imagenes/imagen-1.webp';
import Slides2 from '@/assets/imagenes/imagen-3.png';


// carrusel//


function Carrusel() {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            imagen: Slides0,
            caption: (
              <div className={styles.captionContainer}> 
                <h2 className={styles.tituloSlider}>Hidratación inteligente para su paisaje</h2>
                <p className={styles.textoSlider}> Aprovecha la tecnología agrícola de precisión para asegurar que su ecosistema prospere mediante la automatización inteligente y el análisis de datos en tiempo real.</p>
              </div>
            )
        },
        
        {
          imagen: Slides1,
          caption: (
            <div className={styles.captionContainer}> 
                <h2 className={styles.tituloSlider}>Diseños basados en tu clima y suelo</h2>
                <p className={styles.textoSlider}> Ahorra en el recambio de plantas y aprovechas las estaciones con informacion del clima en tu ciudad.</p>
              </div>
            )
        },
        {
          imagen: Slides2,
            caption: (
                <div className={styles.captionContainer}> 
                    <h2 className={styles.tituloSlider}>Ahorra en agua y lleva el control de tu consumo hidrico</h2>
                    <p className={styles.textoSlider}> Descarga y prueba nuestra app y ahorra tiempo y dinero en el cuidado de tu jardin o huerto.</p>
                </div>
                )
        },
      ];


  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };
  

  return (
    <div className={styles.carrusel}>
        {/* Botones de control */}
        <button 
            className={`${styles.sliderControl} ${styles.controlPrev}`} 
            onClick={prevSlide}
        > &lt; </button>

        <img src={slides[currentSlide].imagen} className={styles.sliderImage} />
        
        {/* Caption */}
        <div className={styles.sliderCaption}>
            {slides[currentSlide].caption}
        </div>

        {/* Botones de control */}
        <button 
            className={`${styles.sliderControl} ${styles.controlNext}`} 
            onClick={nextSlide}
        > &gt; </button>

        {/* Indicadores */}
        <div className={styles.indicadoresContainer}>
            {slides.map((_, index) => (
                <button
                    key={index}
                    className={`${styles.indicador} ${currentSlide === index ? styles.active : ''}`}
                    onClick={() => setCurrentSlide(index)}
                />
            ))}
        </div>
    </div>
);
}

export default Carrusel;


