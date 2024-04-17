"use client";
import React from 'react';
import { Typography, Paper, useTheme, Box } from '@mui/material';
import { Project } from '@/lib/projects';
import Image from 'next/image';


interface ProjectDetailsProps {
    project: Project
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({project}) => {
    const theme = useTheme();
    return (
        <Box sx={{padding: "5rem"}}>
            <Box sx={{display: "flex", flexDirection: "row"}}>
            <Typography variant="h4" color="textPrimary">
                {project.name}
            </Typography>
            <Box m="0.5rem" />
            <Image
                width={50}
                height={50}
                src={project.imgUrl}
                alt={project.name}
                style={{
                    borderRadius: "50%",
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                }}
            />
            </Box>
            <Typography variant="subtitle1" color="textSecondary">
                {project.date}
            </Typography>
            <Box m="0.5rem" />
        </Box>
    );
};

export default ProjectDetails;