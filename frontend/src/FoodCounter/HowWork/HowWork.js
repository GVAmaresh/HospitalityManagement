import './HowWork.css';
import howWork from '../image/howWork2.png';
function HowWork() {
  return (
    <div>
      <div className='howwork'>
        <div className='howwork_heading'>
          <h1 className='howwork_mainHeading'>How It Works</h1>
          <p className='howwork_para'>
            Restaurants encourage customer reviews as valuable feedback. Diners
            share experiences, rating food, service, and ambiance. Reviews
            influence others' choices, enhancing transparency and trust.
            Restaurants often respond, showing care for customers. This
            interactive loop shapes dining experiences, promoting quality and
            connection.
          </p>
        </div>
        <div className='howwork_boxes'>
          <div className='howwork_1 howwork_0'>
            <h1 className='h1'>Choose Your Favroite Food</h1>
            <p className='p'>
              Delight your palate by choosing your favorite food. Whether it's a
              savory dish, a sweet treat, or a culinary masterpiece, savor the
              flavors that bring you joy and culinary satisfaction.
            </p>
          </div>
          <div className='howwork_2 howwork_0'>
            <h1 className='h1'>Pay For Your Order</h1>
            <p className='p'>
              We kindly request you to complete your order by making the
              payment. Your support is valued, and we're here to assist you
              throughout the process. Thank you for choosing us.
            </p>
          </div>
          <div className='howwork_3 howwork_0'>
            <h1 className='h1'>Delivary For Free</h1>
            <p className='p'>
              Enjoy the added convenience of free delivery as advertised. We're
              delighted to provide this service to enhance your experience. Your
              satisfaction is our priority. Place your order now and experience
              the seamless, cost-free delivery service we proudly offer.
            </p>
          </div>
        </div>
      </div>
      <img src={howWork} className='howwork_img'></img>
    </div>
  );
}

export default HowWork;
