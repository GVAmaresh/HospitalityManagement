import './Services.css';
import { GiHamburger } from 'react-icons/gi';
import { MdComment } from 'react-icons/md';
import { MdDirectionsBike } from 'react-icons/md';
function Services() {
  return (
    <div className='services_grid'>
      <div className='services_1 services'>
        <GiHamburger size={40} style={{ marginLeft: '40px' }} />
        <h2>Delicious Food</h2>
        <p>
          Indulge in a world of culinary delights with these delectable foods.
          Savor the iconic richness of pizza, the artistry of sushi, and the
          gratifying decadence of chocolate cake. Explore global flavors with
          tacos, biryani, and pad Thai. Sink your teeth into juicy burgers,
          relish the chill of ice cream, and savor the comfort of pasta
          carbonara. Delight in the fusion of flavors in dim sum, the aromatic
          allure of biryani, and the zing of guacamole. Treat yourself to the
          elegance of croissants and the umami explosion of ramen. These 100
          foods invite you on a journey of taste, culture, and pure culinary
          pleasure.
        </p>
      </div>
      <div className='services_2 services'>
        <MdDirectionsBike size={48} style={{ marginLeft: '40px' }} />
        <h2>Fast Delivery</h2>
        <p>
          Experience the speed and efficiency of our fast delivery service. With
          a focus on promptness and reliability, our delivery team ensures that
          your orders reach you in no time. Whether it's a piping-hot meal,
          essential supplies, or special treats, we're committed to getting them
          to your doorstep swiftly. Our streamlined process and dedicated
          drivers work together to provide a seamless experience, so you can
          enjoy what you love without delay. From kitchen to door, we take pride
          in making sure your items are in your hands when you need them. Trust
          us for a quick and hassle-free delivery experience.
        </p>
      </div>
      <div className='services_3 services'>
        <MdComment size={48} style={{ marginLeft: '40px' }} />
        <h2>Customer Review</h2>
        <p>
          Our customers' satisfaction is our top priority. We value each review
          as a reflection of our commitment to excellence. From the quality of
          our products to the attentiveness of our service, we strive to exceed
          expectations. Hearing about the positive experiences our customers
          have had brings us immense joy. Constructive feedback is equally
          valuable as it helps us refine and enhance our offerings. We're
          dedicated to continuously improving and providing exceptional
          experiences. Your reviews drive us to deliver the best and foster a
          strong bond of trust. Thank you for being an integral part of our
          journey towards excellence.
        </p>
      </div>
    </div>
  );
}

export default Services;
