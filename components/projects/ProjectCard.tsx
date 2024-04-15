"use client";
import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material';
import { motion } from "framer-motion";
import { Project } from '@/lib/projects';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ProjectCardProps {
    path: string,
    name: string,
    subtitle: string
    date: string,
    imgUrl: string
    // project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ path, name, subtitle, date, imgUrl }) => {
    const router = useRouter();
    const theme = useTheme();
    return (
        <motion.div whileHover={{ scale: 1.05 }}>
        <Card 
        onClick={() => router.push(`/projects/${path}`)}
            style={{
            width: 250,
            height: "auto",
            backgroundColor: "theme.palette.primary.main",
            boxShadow: "0",
            margin: "1rem",
            cursor: "pointer",
            borderRadius: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "1.5rem",
            
          }}
        >
            <Image
                width={200}
                height={200}
                src={imgUrl}
                alt={name}
                style={{
                borderRadius: "50%",
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)"
                }}
            />
            <Box m="0.5rem" />
            <Typography color="textPrimary" align="center" variant="h6">
                {name}
            </Typography>
    
            <Box m="0.25rem" />
    
            <Typography color="textPrimary" variant="body2" textAlign="center">
                {subtitle}
            </Typography>
    
            <Box m="0.25rem" />
    
            <Typography
                color="textPrimary"
                align="center"
                variant="body2"
                fontStyle="italic"
            >
                {date}
            </Typography>  
        </Card>
      </motion.div>
    );
};

export default ProjectCard;