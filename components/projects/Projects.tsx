"use client";
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../../lib/projects';

export const Projects: React.FC = () => {
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
        Projects
      </Typography>
      <Box m="0.5rem" />

      <Container maxWidth="lg">
        <Grid
          container
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          {projects.map(({ path, name, subtitle, date, imgUrl }) => (
            <motion.div layout key={name}>
              <ProjectCard
                      path={path}
                      name={name}
                      subtitle={subtitle}
                      date={date}
                      imgUrl={imgUrl}              
                      />
            </motion.div>
          ))}
        </Grid>
      </Container>
      </Box>
    );
};
