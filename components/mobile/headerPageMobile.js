import Image from "next/image";

const myLoader=()=>{
  return `https://www.hotelxcaret.com/assets/logos/concentrador-hoteles/hoteles-logos.svg`;
}

export  default function HeaderPageMobile(){

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo-mobile">
            <div style={{display:'block', width:'110px'}}>
            <img 
              loader={myLoader} 
              src={`https://www.hotelxcaret.com/assets/logos/concentrador-hoteles/hoteles-logos.svg`} 
              alt="logo xcaret" />
            </div>
          </div>
          <ul className="menu-mobile">
            <li>CONTACTO</li>
            <li>EN</li>
            <li>
              <select>
                <option value ='MXN' selected>MXN</option>
                <option value ='USD'>USD</option>
                <option value ='EUR'>EUR</option>
              </select>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}