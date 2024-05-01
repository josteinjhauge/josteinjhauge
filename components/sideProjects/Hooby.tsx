"use client";
import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import paintings from '@/lib/paintings';
import { AnimatePresence, motion } from 'framer-motion';
import PaintingCard from './PaintingCard';
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