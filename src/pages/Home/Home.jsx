import './Home.css'
import PropTypes from 'prop-types';
import image1 from "../../assets/guest.jpg";
import image2 from "../../assets/react.svg";
import image3 from "../../assets/guest.jpg";
import image4 from "../../assets/favicon.png"
import image5 from "../../assets/Wireframe3.png"
import image6 from "../../assets/Wireframe5.png"
import image7 from "../../assets/bg.jpg";
import image8 from "../../assets/banjoza.jpg"
import image9 from "../../assets/Wireframe2.png"
import image10 from "../../assets/Wireframe4.png"

function Home({ onNavigate }) {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
    const numberOfCopies = 100;

    const renderImages = () => {
        let allImages = [];
        for (let i = 0; i < numberOfCopies; i++) {
            allImages = allImages.concat(images);
        }
        return allImages.map((image, index) => <img key={index} src={image} alt={`img${index}`} />);
    };

    return (
        <div className='homeDiv'>
            <h1>Welcome To Charmed Creations</h1>
            <div className='carousel'>
                <div className='moving'>{renderImages()}</div>
                <div className='moving'>{renderImages()}</div>
                <div className='moving'>{renderImages()}</div>
                <div className='mask'></div>
            </div>
            <button onClick={() => onNavigate('bedazzle')}>Start Designing</button>
        </div>
    )
}

Home.propTypes = {
    onNavigate: PropTypes.func.isRequired,
};

export default Home;