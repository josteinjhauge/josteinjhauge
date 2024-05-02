"use client";
import React from 'react';
import { Typography, useTheme, Box, Container, Link, Chip } from '@mui/material';
import { Project } from '../lib/projects';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


interface ProjectDetailsProps {
    project: Project
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({project}) => {
    const theme = useTheme();
    const router = useRouter();

    const header = () => {
        return (
            <>
            <Container sx={{alignItems: "center"}}>
                        <Box display="flex">
                            <Image width={100}
                                height={100}
                                src={project.imgUrl}
                                alt={project.name}
                                style={{
                                    borderRadius: "50%",
                                    border: "2px solid white",
                                    borderColor: theme.palette.text.primary,
                                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                                }}
                            />
                            <Box sx={{alignContent: "center"}}>
                                <Typography variant="h4" color="textPrimary" sx={{ml: 2}}>
                                    {project.name}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary" sx={{ml: 2}}>
                                    {project.date}
                                </Typography>
                            </Box>
                        </Box>
            </Container>
            </>
        )
    }

    const renderLinks = () => {if (project.links) {
        return (
          <>
            <Box m="1rem" />
  
            <Typography color="textPrimary" variant="h5" fontWeight="bold">
              Links:
            </Typography>
  
            {project.links.map((link) => (
              <div key={link.name}>
                <Box m="1rem" />
                <Typography color="textPrimary" variant="body1" fontWeight="bold">
                  {link.name}:{" "}
                  <Link
                    style={{ wordWrap: "break-word", fontWeight: "normal" }}
                    rel="noopener noreferrer"
                    target="_blank"
                    color="textSecondary"
                    href={link.link}
                  >
                    {link.link}
                  </Link>
                </Typography>
              </div>
            ))}
          </>
        );
      }
    }

    const renderTech = () => {
      if (project.technologies) {
        return (
          <>
            <Box m="1rem" />
            <Typography color="textPrimary" variant="h5" fontWeight="bold">
              Technologies Used:
            </Typography>
            <Box m="1rem" />
              {project.technologies.map((tech, i) => (
                <Box flexDirection="row" padding={0.5} key={i}>
                  <Chip label={tech.name} onClick={() => router.push(`${tech.link}`)} variant='outlined' />
                </Box>
              ))}
          </>
        );
      }
    };
    
    return (
        <Box sx={{padding: "3rem"}}>
            {header()}
            
            <Box m="1rem" />
            <Container maxWidth="md">
        {project.description.map((paragraph: string) => (
          <Box key={paragraph}>
            <Typography color="textPrimary" variant="body1">
              {paragraph}
            </Typography>
            <Box m="1rem" />
          </Box>
        ))}
        {renderLinks()}
        {renderTech()}
      </Container>
        </Box>
    );
};

export default ProjectDetails;