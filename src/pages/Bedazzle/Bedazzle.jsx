import './Bedazzle.css'
import image1 from "../../assets/guest.jpg"
import image2 from "../../assets/guest.jpg"
import image3 from "../../assets/guest.jpg"
import PropTypes from 'prop-types';

function Bedazzle({ onNavigate }) {

  return (
      <div className='bedazzle'>
          <h1 className='text'>Ready To Design?</h1>
          <div className='sections'>
          <div className='section ct1' onClick={() => onNavigate('createBadge')} role="button" tabIndex={0}>
                  <span className="item-name first">Retractable Badge</span>
                  <img src={image1} alt="Retractable Badge" className='image-icon'/>
                  <div className="price">Starting at <span className="amount">$8.99</span></div>
              </div>
              <div className='section ct2' onClick={() => onNavigate('createCase')} role="button" tabIndex={0}>
                  <span className="item-name second">Airpod Case</span>
                  <img src={image2} alt="Airpod Case" className='image-icon'/>
                  <div className="price">Starting at <span className="amount">$9.99</span></div>
              </div>
              <div className='section ct3' onClick={() => onNavigate('createBracelet')} role="button" tabIndex={0}>
                  <span className="item-name third">Airpod/Iphone Bracelet</span>
                  <img src={image3} alt="Airpod/Iphone Bracelet" className='image-icon'/>
                  <div className="price">Starting at <span className="amount">$3.99</span></div>
              </div>
          </div>
      </div>
  );
}

Bedazzle.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default Bedazzle;