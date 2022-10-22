export default function FooterMobile(){
  return(
    <div>
      <footer>
        <div class="info">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus provident doloribus nihil aperiam blanditiis consequuntur quas beatae minus! Illo alias sit aperiam, recusandae sed consectetur quae iure quia natus eum?<br/>Nisi iusto voluptatem pariatur praesentium dolore accusamus harum facilis exercitationem dolorem at impedit quos atque facere, consequatur libero error explicabo quis enim! Doloremque eveniet, voluptatibus earum quos mollitia quidem vitae.<br/>Ex vitae hic ipsam? Ab nobis eveniet suscipit amet dolorum reprehenderit necessitatibus repudiandae! Laborum fugiat libero eius, odio excepturi ipsam, magni, id labore in architecto quod nesciunt? Veritatis, quia vitae.</p>
        </div>
        <div class="contact-mobile">
          <div class="contact-email-mobile">
            <p>ATENCIÓN A CLIENTES</p>
            <p>reservaciones@hotelxcaret.com</p>
          </div>
          <div class="contact-numbers-mobile">
            <ul class="contact-menu">
              <li>
                <p>México</p>
                <p>998-883-3143</p>
              </li>
              <li>
                <p>USA-CAN</p>
              <p>1-855-326-0682</p>
              </li>
              <li>
                <select>
                  <option value ='' selected>Resto del mundo</option>
                  <option value ='USD'>USD</option>
                  <option value ='EUR'>EUR</option>
                </select>
              </li>
            </ul>
          </div>
          <div class="social-mobile">
            <ul class="contact-menu">
              <li><a href="#"><img src="/assets/icon_facebook.svg" alt="logo facebook" /></a></li>
              <li><a href="#"><img src="/assets/icon_instagram.svg" alt="logo instagram" /></a></li>
              <li><a href="#"></a><img src="/assets/icon_twitter.svg" alt="logo twitter" /></li>
            </ul> 
          </div>

        </div>
        <div class="copyright">
          <p>©Copyright Experiencias Xcaret Hotel S.A.P.I. de C.V</p>
        </div>
      </footer>
    </div>
  );
}