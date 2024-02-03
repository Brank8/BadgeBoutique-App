import './CreateBadge.css'
import PropTypes from 'prop-types';
import { IoArrowBackOutline } from "react-icons/io5";

function CreateBadge({ onNavigate }) {
    return (
    <div>
        <div onClick={() => onNavigate('bedazzle')}><IoArrowBackOutline className='goBackArrow'/></div>
        <h1>Create Badge</h1>
    </div>
    )
  }
  
  CreateBadge.propTypes = {
    onNavigate: PropTypes.func.isRequired,
  };

export default CreateBadge;