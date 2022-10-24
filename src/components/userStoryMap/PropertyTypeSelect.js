import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const PropertyTypeSelect = ({ propertyType, setPropertyType }) => {

  const mystyle = {
    padding: "10px",
    fontFamily: "Arial"
  };
  const handleChange = (event) => {

    setPropertyType(event.target.value);
  };

  return (

    <>
      <label for="cars">Choose property type:</label>
      <select style={mystyle} name="cars" id="cars" onChange={handleChange} value={propertyType}>
        <option value="House">Hotel</option>
        <option value="Apartment">Apartment</option>

      </select>
    </>

  );
}
