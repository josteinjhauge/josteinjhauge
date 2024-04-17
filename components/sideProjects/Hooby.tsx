"use client";
import React from 'react';
import { Box, styled, Typography } from '@mui/material';

const SlideItem = styled(Box) ({
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
});

const SideProjects: React.FC = () => {
    return (
        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        paddingTop="2rem"
      >
  
        <Typography
          color="textPrimary"
          align="center"
          variant="h4"
          fontWeight="500"
        >
          Side Projects / Hobbies
        </Typography>
        <Box m="0.5rem" />
        </Box>
    );
};

export default SideProjects;