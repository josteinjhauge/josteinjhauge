import React from 'react';
import { Typography, Paper } from '@mui/material';
import { Project } from '@/lib/projects';


interface ProjectDetailsProps {
    project: Project
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({project}) => {

    return (
        <Paper>
            <Typography variant="h4" gutterBottom>
                Project Details
            </Typography>
            {/* Add your project details content here */}
        </Paper>
    );
};

export default ProjectDetails;