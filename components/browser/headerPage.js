import Image from "next/image";

const myLoader=()=>{
  return `https://www.hotelxcaret.com/assets/logos/concentrador-hoteles/hoteles-logos.svg`;
}

export  default function HeaderPage(){

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <div style={{display:'block', width:'300px'}}>
            <img 
              loader={myLoader} 
              src={`https://www.hotelxcaret.com/assets/logos/concentrador-hoteles/hoteles-logos.svg`} 
              alt="logo xcaret" />
            </div>
          </div>
          <ul className="menu">
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