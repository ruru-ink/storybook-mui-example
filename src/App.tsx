import React from 'react';

import {Box, Typography} from '@mui/material';

import {Button} from '@/components/button'; // TODO : correct alias. '@/components/button' fails but './components/button' works

// import {Button} from './components/button';
import {ReactComponent as Logo} from './assets/logo.svg';

import './App.css';

const App = () => (
  <Box
    component="header"
    sx={{
      width: 1,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
    }}>
    <Logo style={{height: '100px'}} />
    <Typography component="p" variant="subtitle1" mb={2}>
      Edit
      <code>src/App.js</code> and save to reload.
    </Typography>
    <Button variant="contained" label="learn react" />
  </Box>
);

export default App;
