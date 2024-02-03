import './CreateCase.css'
import PropTypes from 'prop-types';
import { IoArrowBackOutline } from "react-icons/io5";

function CreateCase({ onNavigate }) {
    return (
    <div>
        <div onClick={() => onNavigate('bedazzle')}><IoArrowBackOutline className='goBackArrow'/></div>
        <h1>Create Case</h1>
    </div>
    )
  }
  
  CreateCase.propTypes = {
    onNavigate: PropTypes.func.isRequired,
  };

export default CreateCase;