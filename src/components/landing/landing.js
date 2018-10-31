import React, { Component } from 'react';

import Slideshow from '../general/slideshow'
import './landing.css';

class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allProducts: null
    }
  }


  render() {
    return (
      <div>
        <div className="slide-view">
          <Slideshow />
        </div>
        <div className="section">
          <div className="subsection">
            <div className="about-container">
              <h3 className='title-about'> Acerca de Nosotros</h3>
              <p>ÁMBAR es una empresa Barranquillera dedicada a la 
                producción de artículos de bisutería que busca materializar las
                ideas y satisfacer las necesidades de nuestros clientes,
                ofreciéndoles productos exclusivos y de calidad. Somos una
                empresa conformada por jóvenes emprendedores con
                pensamientos e ideas creativas caracterizados por la unión y el
                respeto, que día a día trabajan en pro de nuestra misión y
                visión.
              </p>
            </div>
            <div>
              <iframe title="promovid" src="https://streamable.com/s/tug3b/mesynk?autoplay=1&muted=1" frameborder="0"/>
            </div> 
          </div>
          <div className="subsection">
            {/* <div className="big-logo">
              <img src="/ambar-logo.png" />
            </div> */}
            <div className="mision-container">
              <div className='parallax'>
                <div className= 'sub-mision-container'>
                  <h3>Misión</h3>
                  <p>
                  ÁMBAR es una empresa del sector de bisutería que tiene como
                  objetivo crear manualmente prendas exclusivas que se
                  caractericen por su calidad, elegancia y un diseño innovador y
                  vanguardista. Buscamos brindarle a nuestros clientes productos
                  con precios atractivos y de excelente calidad, motivados por el
                  deseo de ser líderes en el mercado cumpliendo una labor con
                  conciencia social y medio ambiental.
                  </p>
                </div>
              </div>
              <div className='vision-container'>
                <div className='vision-container-text'>
                  <h3>Visión</h3>
                  <p>
                  A 2020 ÁMBAR será reconocido por participar
                  estratégicamente en los mercados en los cuales nos
                  posicionamos, teniendo productos exclusivos en materia
                  de diseño y estética, siendo preferidos por nuestros
                  clientes y logrando ser líder. Así mismo, seremos una
                  empresa financieramente sostenible y sólida, así como
                  una organización con ética laboral excepcional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
