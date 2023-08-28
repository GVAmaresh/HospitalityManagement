import Navbar from './Navbar/Navbar';
import AppAd from './AppAD/AppAD';
import CustReview from './CustReview/CustReview';
import Footer from './Footer/Footer';
import Services from './Services/Services';
import Header from './Header/Header';
import HowWork from './HowWork/HowWork';
import Special from './Special/Special';

function Food() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <HowWork />
      <Special />
      <AppAd />
      <CustReview />
      <Footer />
    </>
  );
}

export default Food;
