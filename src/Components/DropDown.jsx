import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
    const [appointment, setAppointment] = React.useState('');
  
    const handleChange = (event) => {
      setAppointment(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel color="" id="demo-simple-select-label">Select Appointment</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={appointment}
            label="Select Appointment"
            onChange={handleChange}
          >
            <MenuItem value={1}>type 1</MenuItem>
            <MenuItem value={2}>type 2</MenuItem>
            <MenuItem value={3}>type 3</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }