import React from 'react';
import { Typography, Paper } from '@mui/material';


interface ProjectDetailsProps {
    // Define the props for your project details here
}

const ProjectDetails: React.FC<ProjectDetailsProps> = (props) => {

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