import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Form from './Form';

const Homepage = () => (
  <Container maxWidth="sm">
    <Box display="flex" flexDirection="column">
      <Typography variant="h2" component="h1" align="center">
        ACS-REPORTS
      </Typography>
      <Form />
    </Box>
  </Container>
);

export default Homepage;
