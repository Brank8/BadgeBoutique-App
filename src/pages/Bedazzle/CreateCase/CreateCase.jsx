import './CreateCase.css'
import PropTypes from 'prop-types';
import { IoArrowBackOutline } from "react-icons/io5";

function CreateCase({ onNavigate }) {
    return (
    <div>
        <div onClick={() => onNavigate('bedazzle')}><IoArrowBackOutline className='goBackArrow'/></div>
        <div className='createCaseContainer'>
        <h1>Create Case</h1>
        {/* <p>Choose Badge</p>
        <p>Choose Rhinestone</p>
        <p>Choose Charm</p> */}
        <button>Add to Cart</button>
        </div>
    </div>
    )
  }
  
  CreateCase.propTypes = {
    onNavigate: PropTypes.func.isRequired,
  };

export default CreateCase;