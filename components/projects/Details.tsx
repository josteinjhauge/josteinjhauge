"use client";
import React from 'react';
import { Typography, Paper, useTheme, Box } from '@mui/material';
import { Project } from '@/lib/projects';


interface ProjectDetailsProps {
    project: Project
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({project}) => {
    const theme = useTheme();
    return (
        <Box>
            <Typography variant="h4" color="textPrimary">
                {project.name}
            </Typography>
            <Box m="0.5rem" />
            <Typography variant="subtitle1" color="textSecondary">
                {project.date}
            </Typography>
            <Box m="0.5rem" />
        </Box>
    );
};

export default ProjectDetails;