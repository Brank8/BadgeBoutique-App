import './Bedazzle.css'
import image1 from "../../assets/guest.jpg"


function Bedazzle() {
  return (
      <div className='bedazzle'>
          <h1 className='text'>Start Designing</h1>
          <div className='sections'>
              <div className='section ct1' role="button" tabIndex={0}>
                  <span className="item-name">Retractable Badge Holder</span>
                  <img src={image1} alt="Retractable Badge Holder" className='image-icon'/>
                  <div className="price">Starting at <span className="amount">$7.99</span></div>
              </div>
              <div className='section ct2' role="button" tabIndex={0}>
                  <span className="item-name">Airpod Case</span>
                  <img src={image1} alt="Airpod Case" className='image-icon'/>
                  <div className="price">Starting at <span className="amount">$9.99</span></div>
              </div>
              <div className='section ct3' role="button" tabIndex={0}>
                  <span className="item-name">Airpod/Iphone Bracelet</span>
                  <img src={image1} alt="Airpod/Iphone Bracelet" className='image-icon'/>
                  <div className="price">Starting at <span className="amount">$3.99</span></div>
              </div>
          </div>
      </div>
  );
}


export default Bedazzle;