import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface ProjectCardProps {
    path: string,
    name: string,
    subtitle: string
    date: string,
    imgUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ path, name, subtitle, date, imgUrl }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {subtitle}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;