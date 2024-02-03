import './CreateBracelet.css'
import PropTypes from 'prop-types';
import { IoArrowBackOutline } from "react-icons/io5";

function CreateBracelet({ onNavigate }) {
    return (
    <div>
        <div onClick={() => onNavigate('bedazzle')}><IoArrowBackOutline className='goBackArrow'/></div>
        <h1>Create Bracelet</h1>
    </div>
    )
  }
  
  CreateBracelet.propTypes = {
    onNavigate: PropTypes.func.isRequired,
  };

export default CreateBracelet;