"use client";
import React from 'react';
import { Box, Typography } from '@mui/material';
import Display from './Display';


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
            <Display />
        </Box>
    );
};

export default SideProjects;