import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { IoArrowBackOutline, IoCloseOutline } from "react-icons/io5";
import "./CreateCase.css";
import yellowCase from "../../../assets/Case/yellowCase.png"
import pinkCase from "../../../assets/Case/pinkCase.png"
import blueCase from "../../../assets/Case/blueCase.png"
import purpleCase from "../../../assets/Case/purpleCase.png"
import blackCase from "../../../assets/Case/blackCase.png"
import charm1 from "../../../assets/Badge/charm1.jpg"
import charm2 from "../../../assets/Badge/charm2.jpg"
import charm3 from "../../../assets/Badge/charm3.jpg"
import charm4 from "../../../assets/Badge/charm4.jpg"
import charm5 from "../../../assets/Badge/charm5.jpg"
import charm6 from "../../../assets/Badge/charm6.jpg"
import charm7 from "../../../assets/Badge/charm7.jpg"
import charm8 from "../../../assets/Badge/charm8.jpg"
import charm9 from "../../../assets/Badge/charm9.jpg"
import charm10 from "../../../assets/Badge/charm10.jpg"
import charm11 from "../../../assets/Badge/charm11.jpg"
import charm12 from "../../../assets/Badge/charm12.jpg"
import charm13 from "../../../assets/Badge/charm13.jpg"
import charm14 from "../../../assets/Badge/charm14.jpg"
import charm15 from "../../../assets/Badge/charm15.jpg"
import charm16 from "../../../assets/Badge/charm16.jpg"
import charm17 from "../../../assets/Badge/charm17.jpg"



function CreateCase({ onNavigate, onAddToCart }) {
    const [selectedColor, setSelectedColor] = useState('')
    const [selectedCharm, setSelectedCharm] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState({ charm: false });
    const dropdownRef = useRef({ charm: null });
    const [colorError, setColorError] = useState(false);
    const [forceRerenderKey, setForceRerenderKey] = useState(0);

    const handleRemoveColor = (e) => {
        e.stopPropagation();  // Prevent click event from bubbling up
        setSelectedColor('');
        setDropdownOpen(prev => ({ ...prev, color: false }));
      };
      
      const handleRemoveCharm = (e) => {
        e.stopPropagation();  // Prevent click event from bubbling up
        setSelectedCharm('');
        setDropdownOpen(prev => ({ ...prev, charm: false }));
      };

    const colors = [
        { id: '1', src: yellowCase, label: 'Yellow' },
        { id: '2', src: pinkCase, label: 'Pink' },
        { id: '3', src: blueCase, label: 'Blue' },
        { id: '4', src: purpleCase, label: 'Purple' },
        { id: '5', src: blackCase, label: 'Black' }
      ];

  const charms = [
    { id: '1', src: charm1, label: 'Lollipops' },
    { id: '2', src: charm2, label: 'Cookies' },
    { id: '3', src: charm3, label: 'Ice Pops' },
    { id: '4', src: charm4, label: 'Rainbow' },
    { id: '5', src: charm5, label: 'Smiley Face' },
    { id: '6', src: charm6, label: 'Sesame Street' },
    { id: '7', src: charm7, label: 'Donuts' },
    { id: '8', src: charm8, label: 'Princess' },
    { id: '9', src: charm9, label: 'Ice Cream' },
    { id: '10', src: charm10, label: 'Halloween' },
    { id: '11', src: charm11, label: 'Misc' },
    { id: '12', src: charm12, label: 'Shooting Stars' },
    { id: '13', src: charm13, label: 'Sour Life Savers' },
    { id: '14', src: charm14, label: 'Candy' },
    { id: '15', src: charm15, label: 'Candy' },
    { id: '16', src: charm16, label: 'Cake Pops' },
    { id: '17', src: charm17, label: 'Clouds' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current.color && !dropdownRef.current.color.contains(event.target)) {
        setDropdownOpen(prev => ({ ...prev, color: false }));
      }
      if (dropdownRef.current.charm && !dropdownRef.current.charm.contains(event.target)) {
        setDropdownOpen(prev => ({ ...prev, charm: false }));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setDropdownOpen(prev => ({ ...prev, color: false }));
  };

  const handleCharmSelect = (charm) => {
    setSelectedCharm(charm);
    setDropdownOpen(prev => ({ ...prev, charm: false }));
  };

  const handleAddToCart = () => {
    // Reset errors first
    setColorError(false);
  
    // Use a timeout to ensure the class is toggled to reset the animation
    setTimeout(() => {
      let error = false;
  
      if (!selectedColor) {
        setColorError(true);
        error = true;
      }
  
      if (!error) {
        // Proceed with adding to cart
        const item = {
          color: selectedColor.label,
          charm: selectedCharm ? selectedCharm.label : 'None'
        };
  
        onAddToCart(item);
        onNavigate('cart');
      }
    }, 0); // timeout set to 0 to allow state to be set in the next event loop
  
    // Force re-render to reset the animation
    setForceRerenderKey(prev => prev + 1);
  };
  

  return (
    <div>
    <div className='createBadgeContainer'>
    <div className="arrowContainer">
        <IoArrowBackOutline className='goBackArrow' onClick={() => onNavigate('bedazzle')}/>
      </div>
        <h1>Create Case</h1>
        {/* <p>Let`s start with the color</p> */}
        <div className="threeSections">
        <div className="dropdownContainer" ref={el => dropdownRef.current.color = el}>
        <div className={`dropdownHeader ${colorError ? 'errorShake' : ''}`} onClick={() => setDropdownOpen(prev => ({ ...prev, color: !prev.color }))}>
            {selectedColor ? (
            <div className="selectedItemContainer">
            <img src={selectedColor.src} alt={selectedColor.label} className="selectedImage" />
            <div className="selectedLabel">{selectedColor.label} Case</div>
            <IoCloseOutline className="removeIcon" onClick={(e) => handleRemoveColor(e)} />
          </div>
            ) : 'Select Color (required)‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ '}
          </div>
          {dropdownOpen.color && (
            <div className="dropdownListContainer">
              <ul className="dropdownList">
                {colors.map(color => (
                  <li key={color.id} onClick={() => handleColorSelect(color)}>
                    <img src={color.src} alt={color.label} style={{ width: '150px', height: '150px' }} />
                    <span>{color.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* <p>Choose Charm</p> */}
        <div className="dropdownContainer" ref={el => dropdownRef.current.charm = el}>
          <div className="dropdownHeader" onClick={() => setDropdownOpen(prev => ({ ...prev, charm: !prev.charm }))}>
            {selectedCharm ? (
              <div className="selectedItemContainer">
              <img src={selectedCharm.src} alt={selectedCharm.label} className="selectedImage" />
              <div className="selectedLabel">{selectedCharm.label}</div>
              <IoCloseOutline className="removeIcon" onClick={(e) => handleRemoveCharm(e)} />
          </div>
            ) : 'Select Charm (optional)‎ ‎ ‎ ‎ ‎ ‎ ‎ '}
          </div>
          {dropdownOpen.charm && (
            <div className="dropdownListContainer">
              <ul className="dropdownList">
                {charms.map(charm => (
                  <li key={charm.id} onClick={() => handleCharmSelect(charm)}>
                    <img src={charm.src} alt={charm.label} style={{ width: '200px', height: '100px' }} />
                    <span>{charm.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

CreateCase.propTypes = {
    onNavigate: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired,
  };
  
  export default CreateCase;