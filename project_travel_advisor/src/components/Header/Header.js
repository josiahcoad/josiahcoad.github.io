import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import useStyles from './styles.js';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          This is your happy time :)
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
