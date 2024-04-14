"use client";
import { links } from '@/lib/links';
import { AppBar, Box, Container, IconButton, Link, Toolbar, Typography } from '@mui/material';
import React from 'react';

import NextLink from 'next/link';
import { MdMailOutline } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa6';
import { ICON_SIZE } from '@/lib/theme';

const Navbar: React.FC = () => {
    return (
        <AppBar>
           <Toolbar>
            <Container 
            style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            maxHeight: "10vh",
          }}>
                <NextLink href="/" >
                <Typography variant="h5" color="initial">
                    Jostein Hauge
                </Typography>
                </NextLink>
                <Box>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={links.github}
                    >
                        <IconButton color="secondary" aria-label="GitHub Button">
                        <FaGithub size={ICON_SIZE} />
                        </IconButton>
                    </Link>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={links.linkedin}
                    >
                        <IconButton color="secondary" aria-label="LinkedIn Button">
                        <FaLinkedin size={ICON_SIZE} />
                        </IconButton>
                    </Link>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={links.email}
                    >
                        <IconButton color="secondary" aria-label="Email Button">
                        <MdMailOutline size={ICON_SIZE} />
                        </IconButton>
                    </Link>
            </Box>
            </Container>
           </Toolbar>
        </AppBar>
    );
};

export default Navbar;