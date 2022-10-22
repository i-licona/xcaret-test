import Image from "next/image";

const myLoader=()=>{
  return `https://via.placeholder.com/300x160`;
}

export default function Carousel(){
  return (
    <div>
      <section className="wrapper">
        <div className="carousel">
          <button type="button" className="slide-next" >
            <img
              src="/assets/rigth.svg" 
              alt=""/>
          </button>
          <button type="button" className="slide-back">
            <img
              src="/assets/left.svg" 
              alt=""/>
          </button>
        </div>
        <div className="carousel-description">
          <div className="carousel-logo">
            <img
              loader={myLoader} 
              src={`https://via.placeholder.com/300x160`} alt='Logo xcaret' />
          </div>
          <div className="carousel-content">
            <h2>Hotel Xcaret Arte</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.</p>
            <div>
              <button className="carousel-button" type="button">¡RESERVA AHORA!</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}