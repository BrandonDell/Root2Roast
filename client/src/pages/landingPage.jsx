import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value) {
      // Replace 'your-api-url' with the actual API endpoint
      const response = await axios.get(`your-api-url?query=${event.target.value}`);
      setResults(response.data);
    } else {
      setResults([]);
    }
  };

  return (
    <Container>
    <Box
      sx={{
        width: '300px',
        position: 'fixed',
        left: 0,
        top: 85,
        height: '80%',
        bgcolor: 'background.paper',
        p: 2,
        boxShadow: 3,
      }}
    >
      <TextField
        fullWidth
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
      />
      <List>
        {results.map((result, index) => (
          <ListItem key={index} button>
            <ListItemText primary={result.name} />
          </ListItem>
        ))}
      </List>
    </Box>

     <Box
      sx={{
        width: '300px',
        position: 'fixed',
        right: 0,
        top: 85,
        height: '80%',
        bgcolor: 'background.paper',
        p: 2,
        boxShadow: 3,
      }}
    >
      <TextField
        fullWidth
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
      />
      <List>
        {results.map((result, index) => (
          <ListItem key={index} button>
            <ListItemText primary={result.name} />
          </ListItem>
        ))}
      </List>
    </Box>
    </Container>
  );
};

export default SearchBox;
