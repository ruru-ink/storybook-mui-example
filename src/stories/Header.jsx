import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Header = ({user, onLogin, onLogout}) => (
  // export const Header = ({user, onLogin, onLogout, onCreateAccount}) => (
  <Box sx={{flexGrow: 1}}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          Acme
        </Typography>
        {user ? (
          <>
            <Typography variant="h6" mr={2}>
              {user.name}
            </Typography>
            <Button role="button" color="inherit" onClick={onLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Button role="button" color="inherit" onClick={onLogin}>
            Log in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  </Box>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  // onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};

export default Header;
