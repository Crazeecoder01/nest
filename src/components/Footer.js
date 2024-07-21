import React from 'react';
import { Box, Container, Typography, Link, Divider } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const Footer = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box 
      sx={{
        backgroundColor: '#f1f1f1',
        padding: isSmallScreen ? '20px 10px' : '40px 20px',
        textAlign: 'center',
        marginTop: '60px',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body2" color="textSecondary">
          We are a team dedicated to bringing you the latest news and updates from around the world. Our mission is to provide accurate and timely information to keep you informed.
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" gutterBottom>
          Quick Links
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', justifyContent: 'center', gap: '10px' }}>
          
          
          <Link href="https://www.linkedin.com/in/himanshu-gupta-15703a250/" variant="body2" color="primary" underline="hover">Contact</Link>
          <Link href="#" variant="body2" color="primary" underline="hover">Privacy Policy</Link>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Bee. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
