import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { IoArrowBackOutline, IoCloseOutline } from "react-icons/io5";
import "./CreateBadge.css";
import white from "../../../assets/Badge/white.jpg"
import yellow from "../../../assets/Badge/yellow.jpg"
import pink from "../../../assets/Badge/pink.jpg"
import pinkk from "../../../assets/Badge/pinkk.jpg"
import orange from "../../../assets/Badge/orange.jpg"
import blue from "../../../assets/Badge/blue.jpg"
import red from "../../../assets/Badge/red.jpg"
import grey from "../../../assets/Badge/grey.jpg"
import green from "../../../assets/Badge/green.jpg"
import bluee from "../../../assets/Badge/bluee.jpg"
import purple from "../../../assets/Badge/purple.jpg"
import greenn from "../../../assets/Badge/greenn.jpg"
import blueee from "../../../assets/Badge/blueee.jpg"
import black from "../../../assets/Badge/black.jpg"
import rhinestone1 from "../../../assets/Badge/rhinestone1.jpg";
import rhinestone2 from "../../../assets/Badge/rhinestone2.jpg";
import rhinestone3 from "../../../assets/Badge/rhinestone3.jpg";
import rhinestone4 from "../../../assets/Badge/rhinestone4.jpg";
import rhinestone5 from "../../../assets/Badge/rhinestone5.jpg";
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






function CreateBadge({ onNavigate, onAddToCart }) {
    const [selectedColor, setSelectedColor] = useState('')
    const [selectedRhinestone, setSelectedRhinestone] = useState('');
    const [selectedCharm, setSelectedCharm] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState({ rhinestone: false, charm: false });
    const dropdownRef = useRef({ rhinestone: null, charm: null });
    const handleRemoveColor = () => setSelectedColor('');
    const handleRemoveRhinestone = () => setSelectedRhinestone('');
    const handleRemoveCharm = () => setSelectedCharm('');

    const colors = [
        { id: '1', src: white, label: 'White' },
        { id: '2', src: yellow, label: 'Yellow' },
        { id: '3', src: pink, label: 'Peach' },
        { id: '4', src: pinkk, label: 'Pink' },
        { id: '5', src: orange, label: 'Orange' },
        { id: '6', src: blue, label: 'Sky Blue' },
        { id: '7', src: red, label: 'Red' },
        { id: '8', src: grey, label: 'Grey' },
        { id: '9', src: green, label: 'Green' },
        { id: '10', src: bluee, label: 'Royal Blue' },
        { id: '11', src: purple, label: 'Purple' },
        { id: '12', src: greenn, label: 'Army Green' },
        { id: '13', src: blueee, label: 'Dark Blue' },
        { id: '14', src: black, label: 'Black' }
      ];

  const rhinestones = [
    { id: "1", src: rhinestone1, label: "Red" },
    { id: "2", src: rhinestone2, label: "Pink" },
    { id: "3", src: rhinestone3, label: "Pearl" },
    { id: "4", src: rhinestone4, label: "Black" },
    { id: "5", src: rhinestone5, label: "White" },
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
      if (dropdownRef.current.rhinestone && !dropdownRef.current.rhinestone.contains(event.target)) {
        setDropdownOpen(prev => ({ ...prev, rhinestone: false }));
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

  const handleRhinestoneSelect = (rhinestone) => {
    setSelectedRhinestone(rhinestone);
    setDropdownOpen(prev => ({ ...prev, rhinestone: false }));
  };

  const handleCharmSelect = (charm) => {
    setSelectedCharm(charm);
    setDropdownOpen(prev => ({ ...prev, charm: false }));
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedRhinestone) {
      alert('Please select the required options.');
      return;
    }

    const item = {
      color: selectedColor.label,
      rhinestone: selectedRhinestone.label,
      charm: selectedCharm ? selectedCharm.label : 'None'
    };

    onAddToCart(item);
    onNavigate('cart');
  };

  return (
    <div>
    <div className='createBadgeContainer'>
    <div className="arrowContainer">
        <IoArrowBackOutline className='goBackArrow' onClick={() => onNavigate('bedazzle')}/>
      </div>
        <h1>Create Badge</h1>
        {/* <p>Let`s start with the color</p> */}
        <div className="dropdownContainer" ref={el => dropdownRef.current.color = el}>
          <div className="dropdownHeader" onClick={() => setDropdownOpen(prev => ({ ...prev, color: !prev.color }))}>
            {selectedColor ? (
            <div className="selectedItemContainer">
            <img src={selectedColor.src} alt={selectedColor.label} className="selectedImage" />
            <div className="selectedLabel">{selectedColor.label}</div>
            <IoCloseOutline className="removeIcon" onClick={handleRemoveColor} />
          </div>
            ) : 'Select Color (required)‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ '}
          </div>
          {dropdownOpen.color && (
            <div className="dropdownListContainer">
              <ul className="dropdownList">
                {colors.map(color => (
                  <li key={color.id} onClick={() => handleColorSelect(color)}>
                    <img src={color.src} alt={color.label} style={{ width: '200px', height: '100px' }} />
                    <span>{color.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* <p>Don`t forget the rhinestone</p> */}
        <div className="dropdownContainer" ref={el => dropdownRef.current.rhinestone = el}>
          <div className="dropdownHeader" onClick={() => setDropdownOpen(prev => ({ ...prev, rhinestone: !prev.rhinestone }))}>
            {selectedRhinestone ? (
              <div className="selectedItemContainer">
              <img src={selectedRhinestone.src} alt={selectedRhinestone.label} className="selectedImage" />
              <div className="selectedLabel">{selectedRhinestone.label}</div>
              <IoCloseOutline className="removeIcon" onClick={handleRemoveRhinestone} />
          </div>
            ) : 'Select Rhinestone (required)‎ '}
          </div>
          {dropdownOpen.rhinestone && (
            <div className="dropdownListContainer">
              <ul className="dropdownList">
                {rhinestones.map(rhinestone => (
                  <li key={rhinestone.id} onClick={() => handleRhinestoneSelect(rhinestone)}>
                    <img src={rhinestone.src} alt={rhinestone.label} style={{ width: '200px', height: '100px' }} />
                    <span>{rhinestone.label}</span>
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
              <IoCloseOutline className="removeIcon" onClick={handleRemoveCharm} />
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
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

CreateBadge.propTypes = {
    onNavigate: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired,
  };
  
  export default CreateBadge;