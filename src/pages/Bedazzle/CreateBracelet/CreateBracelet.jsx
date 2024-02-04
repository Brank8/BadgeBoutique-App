import './CreateBracelet.css'
import PropTypes from 'prop-types';
import { IoArrowBackOutline } from "react-icons/io5";

function CreateBracelet({ onNavigate }) {
    return (
        <div>
        <div onClick={() => onNavigate('bedazzle')}><IoArrowBackOutline className='goBackArrow'/></div>
        <div className='createBraceletContainer'>
        <h1>Create Bracelet</h1>
        <p>Choose Beads Color</p>
        <p>Choose Flower Color</p>
        <button>Add to Cart</button>
        </div>
    </div>
    )
  }
  
  CreateBracelet.propTypes = {
    onNavigate: PropTypes.func.isRequired,
  };

export default CreateBracelet;