import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
/* Browser components */
import Carousel from "../components/browser/carousel";
import CarouselTow from "../components/browser/carouselTwo";
import Footer from "../components/browser/footer";
import HeaderPage from "../components/browser/headerPage";
import HeadPage from "../components/browser/headPage";
import MainContent from "../components/browser/mainContent";
/* Mobile components */
import CarouselMobile from "../components/mobile/carouselMobile";
import CarouselTowMobile from "../components/mobile/carouselTwoMobile";
import FooterMobile from "../components/mobile/footerMobile";
import HeaderPageMobile from "../components/mobile/headerPageMobile";
import HeadPageMobile from "../components/mobile/headPageMobile";
import MainContentMobile from "../components/mobile/mainContentMobile";

export default function Home() {

  return(
    <div>
      <BrowserView>
        <HeadPage title='Index'/>
        <HeaderPage></HeaderPage>
        <MainContent></MainContent>
        <Carousel></Carousel>
        <CarouselTow></CarouselTow>
        <Carousel></Carousel>
        <Footer></Footer>
      </BrowserView>
      <MobileView>
        <HeadPageMobile title='Index'/>
        <HeaderPageMobile></HeaderPageMobile>
        <MainContentMobile></MainContentMobile>
        <CarouselMobile></CarouselMobile>
        <CarouselTowMobile></CarouselTowMobile>
        <CarouselMobile></CarouselMobile>
        <FooterMobile></FooterMobile>
      </MobileView>
    </div>
  )
}

