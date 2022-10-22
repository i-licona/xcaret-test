
const myLoader=()=>{
  return `https://via.placeholder.com/300x160`;
}

export default function CarouselTowMobile(){
  return (
    <div>
      <section class="wrapper-mobile">
        <div class="carousel-description-invert">
          <div class="carousel-logo">
            <img src="https://via.placeholder.com/300x160"/>
          </div>
          <div class="carousel-content">
            <h2>Hotel Xcaret Arte</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.</p>
            <div>
              <button class="carousel-button" type="button">¡RESERVA AHORA!</button>
            </div>
          </div>
        </div>
        <div class="carousel-invert">
          <button type="button" class="slide-next" ><img src="/assets/icons/rigth.svg" alt=""/></button>
          <button type="button" class="slide-back"><img src="/assets/icons/left.svg" alt=""/></button>
        </div>
      </section>
    </div>
  );
}