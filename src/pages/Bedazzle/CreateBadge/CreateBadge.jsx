import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { IoArrowBackOutline } from "react-icons/io5";
import "./CreateBadge.css";
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






function CreateBadge({ onNavigate }) {
    const [selectedRhinestone, setSelectedRhinestone] = useState('');
    const [selectedCharm, setSelectedCharm] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState({ rhinestone: false, charm: false });
    const dropdownRef = useRef({ rhinestone: null, charm: null });

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

  const handleRhinestoneSelect = (rhinestone) => {
    setSelectedRhinestone(rhinestone);
    setDropdownOpen(prev => ({ ...prev, rhinestone: false }));
  };

  const handleCharmSelect = (charm) => {
    setSelectedCharm(charm);
    setDropdownOpen(prev => ({ ...prev, charm: false }));
  };

  return (
    <div>
      <div onClick={() => onNavigate('bedazzle')}><IoArrowBackOutline className='goBackArrow'/></div>
      <div className='createBadgeContainer'>
        <h1>Create Badge</h1>
        <p>Choose Rhinestone</p>
        <div className="dropdownContainer" ref={el => dropdownRef.current.rhinestone = el}>
          <div className="dropdownHeader" onClick={() => setDropdownOpen(prev => ({ ...prev, rhinestone: !prev.rhinestone }))}>
            {selectedRhinestone ? (
              <>
              <img src={selectedRhinestone.src} alt={selectedRhinestone.label} className="selectedImage" />
              <div className="selectedLabel">{selectedRhinestone.label}</div>
            </>
            ) : 'Select a Rhinestone'}
          </div>
          {dropdownOpen.rhinestone && (
            <div className="dropdownListContainer">
              <ul className="dropdownList">
                {rhinestones.map(rhinestone => (
                  <li key={rhinestone.id} onClick={() => handleRhinestoneSelect(rhinestone)}>
                    <img src={rhinestone.src} alt={rhinestone.label} style={{ width: '200px', height: '150px' }} />
                    <span>{rhinestone.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <p>Choose Charm</p>
        <div className="dropdownContainer" ref={el => dropdownRef.current.charm = el}>
          <div className="dropdownHeader" onClick={() => setDropdownOpen(prev => ({ ...prev, charm: !prev.charm }))}>
            {selectedCharm ? (
              <>
              <img src={selectedCharm.src} alt={selectedCharm.label} className="selectedImage" />
              <div className="selectedLabel">{selectedCharm.label}</div>
            </>
            ) : 'Select a Charm'}
          </div>
          {dropdownOpen.charm && (
            <div className="dropdownListContainer">
              <ul className="dropdownList">
                {charms.map(charm => (
                  <li key={charm.id} onClick={() => handleCharmSelect(charm)}>
                    <img src={charm.src} alt={charm.label} style={{ width: '200px', height: '150px' }} />
                    <span>{charm.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button>Add to Cart</button>
      </div>
    </div>
  );
}

CreateBadge.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default CreateBadge;